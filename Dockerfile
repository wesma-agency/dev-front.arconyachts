FROM keymetrics/pm2:latest-alpine

ENV COMPOSER_MEMORY_LIMIT=-1

ARG MODE
ENV MODE=$MODE

WORKDIR /var/www/html

COPY . .
COPY .docker/env/${MODE}/app.env .env

RUN npm install
RUN npm run build

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
