FROM node:15.0.1-alpine3.10

LABEL version="1.2.1" maintainer="antoniorp1998@gmail.com"

RUN mkdir /app
WORKDIR /app
RUN adduser -D usutest

# Basic setup, programs and init
RUN npm install
RUN npm install -g jest
# Runtime
VOLUME /test
USER usutest
WORKDIR /test
CMD npm run test