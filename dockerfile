FROM node:10
MAINTAINER aljaxus
WORKDIR /var/app
COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 8101

CMD [ "npm", "run", "start" ]