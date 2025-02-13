FROM node:18-alpine

WORKDIR /app

RUN npm install -g nodemon

RUN npm rebuild bcrypt --build-from-source

COPY package*.json .

RUN npm install

COPY . .



CMD ["node" , "--watch" , "src/app.mjs"]