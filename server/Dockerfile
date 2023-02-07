FROM node:18-alpine 

WORKDIR /app

ARG APP_ID
ENV APP_ID $APP_ID

ENV PORT 8080

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV production

EXPOSE 8080

CMD [ "npm", "run", "start" ]
