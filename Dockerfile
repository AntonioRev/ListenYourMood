FROM node:15.0.1-alpine3.10

LABEL version="1.3.1" maintainer="antoniorp1998@gmail.com"

# Creación de usuario y creación de carpeta node_modules (cambiando los respectivos permisos) para poder instalar las dependencias
RUN adduser -D usutest && \
mkdir node_modules && \
chmod 755 /node_modules && \
chown node /node_modules 
WORKDIR /node_modules

# Copiar archivos package.json e instalar dependencias, en este caso el paquete jest, con usuario distinto de root
USER node
COPY --chown=node package.json ./ 
COPY --chown=node package-lock.json ./
RUN npm ci && rm package*.json

# Cambio de usuario y ejecución de los tests
USER usutest
WORKDIR /test
CMD ["npm", "run", "test"]