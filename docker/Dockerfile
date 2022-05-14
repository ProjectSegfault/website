# Filename: Dockerfile 
FROM node:18-alpine
WORKDIR /home/midou/git_rep/website/docker
COPY . .
RUN npm install
RUN npm run build 
EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--host"]
