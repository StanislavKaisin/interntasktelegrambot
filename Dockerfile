FROM node:16-alpine3.13 as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine3.13
WORKDIR /app
COPY package.json .
RUN npm install typescript -g && npm install --only=production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD npm run start


# "postinstall": "tsc — sourceMap false"