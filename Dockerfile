FROM node:16.13.1-alpine
WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm install

CMD ["npm", "start"]