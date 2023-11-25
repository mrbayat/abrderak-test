FROM node:17-alpine3.12

RUN mkdir -p /usr/local/bin/abrdrak/parking_reservation
WORKDIR /usr/local/bin/abrdrak/parking_reservation

COPY . .

RUN npm install 
CMD node src/interfaces/middlewares/workers.js