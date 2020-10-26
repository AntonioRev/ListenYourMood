FROM node:alpine

LABEL version="1.2.1" maintainer="antoniorp1998@gmail.com"

RUN mkdir /app
WORKDIR /app

# Basic setup, programs and init
RUN npm install
RUN npm install -g jest
# Runtime
VOLUME /test
WORKDIR /test
CMD npm run test