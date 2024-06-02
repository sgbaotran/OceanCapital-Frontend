FROM node:16.20.0-alpine

RUN mkdir /WealthSoldier

COPY . /WealthSoldier

WORKDIR /WealthSoldier

RUN npm install

RUN npm run build

CMD [ "npm","start" ]