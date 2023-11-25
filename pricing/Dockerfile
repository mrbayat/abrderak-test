FROM node:17-alpine3.12

RUN mkdir -p /usr/local/bin/abrdrak/pricing
WORKDIR /usr/local/bin/abrdrak/pricing

COPY . .

RUN npm install 
CMD node src/interfaces/middlewares/workers.js