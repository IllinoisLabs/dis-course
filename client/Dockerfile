FROM node

WORKDIR /app/client
COPY package*.json ./app/client

RUN yarn

EXPOSE 3000
CMD ['yarn', 'start']