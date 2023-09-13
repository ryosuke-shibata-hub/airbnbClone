FROM node:18.12-alpine

WORKDIR /app/

COPY ./airbnb/package.json ./
RUN npm install
