FROM node:12-alpine

ADD . src/

WORKDIR /src

RUN yarn

RUN yarn build

CMD yarn start