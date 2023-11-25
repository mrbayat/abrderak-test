FROM node:17-alpine3.12

RUN mkdir -p /usr/local/bin/abrdrak/parking
WORKDIR /usr/local/bin/abrdrak/parking

COPY . .

RUN npm install 
CMD node src/interfaces/middlewares/workers.js