FROM ruby:2.7.6-alpine AS runtime-image

RUN apk add --update --no-cache --virtual run-dependencies \
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
  libc6-compat \
  && rm -rf /var/cache/apk/*

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY Gemfile Gemfile.lock $APP_HOME
RUN bundle install
COPY . $APP_HOME
EXPOSE 3001

CMD ["rails", "s", "-b", "0.0.0.0", "-p", "3001"]
