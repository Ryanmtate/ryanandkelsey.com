# syntax=docker/dockerfile:experimental

FROM node:11
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 9000
CMD npm run serve
