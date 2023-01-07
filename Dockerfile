FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./
#COPY pnpm-lock.yaml ./

#RUN npm install -g pnpm

RUN npm i

COPY . .

RUN npm run build

EXPOSE 4173

ARG ORIGIN=https://projectsegfau.lt

CMD ["node", "build/index.js"]