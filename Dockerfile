FROM node:19-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "preview" ]