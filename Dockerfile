FROM node:16 AS build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY ./* ./
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
