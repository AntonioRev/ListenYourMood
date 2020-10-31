FROM node:15.0.1-alpine3.10

LABEL version="1.2.2" maintainer="antoniorp1998@gmail.com"

#RUN mkdir /app
#WORKDIR /app
RUN adduser -D usutest && \
    npm install -g jest


USER usutest
#VOLUME /test
WORKDIR /test
CMD ["npm", "run", "test"]