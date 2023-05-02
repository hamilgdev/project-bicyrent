FROM node:14-buster AS compile-image

ENV APP_HOME /usr/src
WORKDIR $APP_HOME
COPY ./package.json ./yarn.lock $APP_HOME/
RUN yarn install --frozen-lockfile

FROM node:14-buster AS runtime-image

ENV APP_HOME /home/app
RUN apt-get update && apt-get install -y tini
COPY --from=compile-image /usr/src/node_modules $APP_HOME/node_modules
COPY . $APP_HOME
EXPOSE 3000
CMD [ "yarn", "dev" ]

WORKDIR $APP_HOME
