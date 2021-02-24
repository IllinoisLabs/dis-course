FROM node

WORKDIR /app/api
COPY package*.json ./app/api

RUN yarn

EXPOSE 3000
CMD ['yarn', 'start']