FROM cl00e9ment/node.js-builder:light AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm i
COPY . ./
RUN pnpm build

EXPOSE 80
CMD "HOST=127.0.0.1"
CMD "PORT=80"
CMD "node" "build"