# Instalación de las herramientas necesarias
En primer lugar, hay que instalar [Node](https://nodejs.org/en/) (junto con el gestor de paquetes por defecto de Node, [NPM](https://www.npmjs.com/get-npm)) con estos 3 comandos:

  > apk add -U curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils
  > curl -o- | bash https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
  > nvm install --lts

Node es un entorno de ejecución que nos permite ejecutar JavaScript en el servidor. Al ser ampliamente utilizado y tener muchas herramientas, posee su propio gestor de paquetes llamado NPM que se instala por defecto con Node. Con NPM instalaremos [Jest](https://jestjs.io/en/), un Framework de tests compatible con JS con numerosas funcionalidades. Para instalarlo:

  > npm install --global jest

El parámetro --global se usa para no instalar Jest en la misma carpeta del proyecto.
Para instalar el gestor de versiones [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)(Node Version Manager):

  > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash

El gestor de versiones nos permitirá cambiar la versión de Node.
