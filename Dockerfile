FROM node:14-alpine
ENV NODE_ENV=production

WORKDIR /client
COPY ["client/package.json", "client/yarn.lock", "./"]

RUN yarn install --frozen-lockfile --prod

COPY ["client", "./"]

RUN yarn build

EXPOSE 3000

RUN ls -al

CMD ["yarn", "start:prod"]
