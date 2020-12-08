FROM node:alpine

WORKDIR /study/backend

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn","dev"]