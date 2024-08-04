FROM node:lts-alpine

WORKDIR /frontend

COPY package*.json ./

COPY yarn*.lock ./

COPY . .
RUN npm install -g http-server
RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]