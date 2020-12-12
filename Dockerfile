FROM node:14.15.0-alpine3.10

LABEL version="1.4.2" maintainer="antoniorp1998@gmail.com"

# Creación de usuario y creación de carpeta node_modules (cambiando los respectivos permisos) para poder instalar las dependencias
RUN npm i -g jest && \
npm i -g supertest && \
npm i -g morgan && \
npm i -g request && \
npm i -g express && \
npm i -g grunt-cli && \
adduser -D usutest && \
mkdir /node_modules && \
chmod 755 /node_modules && \
chown node /node_modules 

# Copiar archivos package.json e instalar dependencias, en este caso el paquete jest, con usuario distinto de root
USER node
COPY --chown=node package.json ./ 
COPY --chown=node package-lock.json ./
COPY --chown=node Gruntfile.js ./
RUN npm i

USER root
RUN rm package*.json

# Cambio de usuario y ejecución de los tests
WORKDIR /test
USER root

RUN chmod 777 /test

USER node
CMD ["grunt", "test"]
