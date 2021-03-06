FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn

RUN yarn build

CMD yarn start