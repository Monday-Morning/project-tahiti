FROM node:alpine

WORKDIR /app

COPY ./client/package*.json /app/

RUN npm ci

COPY ./client /app

RUN npm run build

RUN npm install serve -g
CMD ["serve", "-s", "dist/"]
