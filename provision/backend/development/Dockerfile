FROM ruby:2.7.6-alpine AS runtime-image

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . .
RUN apk update && apk add --no-cache \
  git \
  make \
  build-base \
  postgresql-dev \
  gcc \
  libc6-compat \
  tzdata \
  libcurl \
  pkgconfig \
  tini \
  imagemagick \
  imagemagick-dev \
  imagemagick-libs \
  libc6-compat
RUN bundle install
EXPOSE 3001
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
