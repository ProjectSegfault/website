FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

RUN pnpm build

EXPOSE 4173

CMD ["pnpm", "preview", "--host"]