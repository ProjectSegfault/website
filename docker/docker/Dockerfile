# Filename: Dockerfile 
FROM node:10-alpine
WORKDIR /home/midou/git_rep/website/docker
COPY . .
RUN npm run install
RUN npm run build 
EXPOSE 3000
CMD ["npm", "run", "preview"]
