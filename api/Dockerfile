FROM node

WORKDIR /app/api
COPY package*.json ./app/api

RUN yarn

EXPOSE 8000
CMD ['yarn', 'start']