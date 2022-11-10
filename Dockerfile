FROM node:19-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

RUN pnpm build

EXPOSE 80

CMD [ "pnpm", "preview", "--port", "80" ]