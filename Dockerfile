FROM cl00e9ment/node.js-builder:light AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm i
COPY . ./
RUN pnpm build && cp Caddyfile build

FROM caddy:2.5.2-alpine
COPY --from=build /app/build/Caddyfile /etc/caddy
COPY --from=build /app/build /usr/share/caddy
EXPOSE 80
