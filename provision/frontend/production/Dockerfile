FROM node:18-alpine AS compile-image

FROM compile-image AS deps

RUN apk add --no-cache libc6-compat
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY package.json yarn.lock* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM compile-image AS builder

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY --from=deps $APP_HOME/node_modules ./node_modules
COPY . .
COPY .env.production.sample .env.production
RUN yarn build

FROM compile-image AS prod

ENV APP_HOME /app
WORKDIR $APP_HOME
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder $APP_HOME/public ./public
COPY --from=builder --chown=nextjs:nodejs $APP_HOME/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs $APP_HOME/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

ENTRYPOINT [ "/bin/sh" ]
CMD ["node", "server.js"]