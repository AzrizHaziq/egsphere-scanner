FROM node:8.5.0-slim

WORKDIR /usr/src/app

RUN \
    apt-get update && \
    apt-get install -y git && \
    yarn add -g lerna && \
    yarn add -g bunyan && \
    rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN yarn install

COPY packages/web ./packages/web
COPY packages/api ./packages/api

ENV PORT=9999
ENV TEMP_DIR=/usr/src/app/tmp
ENV LOG_DIR=/usr/log
ENV LOG_LEVEL=debug
ENV NODE_ENV=production

# install and build
COPY lerna.json .
RUN lerna bootstrap

EXPOSE 9999
CMD [ "npm", "--prefix", "packages/server", "start" ]
