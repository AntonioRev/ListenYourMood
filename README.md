# *ListenYourMood* :musical_note:

## Descripción del problema a resolver
Últimamente estoy harto de salir del trabajo y pensar:
  > Me gustaría escuchar música tranquila, pero el maldito aleatorio en las canciones de Spotify hace que pase de *El Concierto de Aranjuez* a *Thunderstruck*, maldita sea.
  
Por ello, he decidido implementar una API, la cual dependiendo del género y de mi estado de ánimo me recomiende una lista de reproducción en Spotify.
A su vez, y por comodidad, se añadirá una opción para poder reproducir la lista de reproducción en la misma aplicación, sin necesidad de salir de la misma o tener que ir a otra página o aplicación

Para el desarrollo de este proyecto será necesario utilizar en algún momento un repositorio en el que se encuentra una [API de autenticación de Spotify](https://github.com/spotify/web-api-auth-examples). A partir de ahí se podrá ejecutar la aplicación pues se necesita un *token* para realizar peticiones al servidor de Spotify.

## Pasos realizados (Issues / Milestones)

Dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se encuentra el archivo [pasos.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/pasos.md), que irá reflejando los pasos que se den en los diferentes estados de la aplicación. Estos pasos deberán relacionarse con los diferentes [issues](https://github.com/AntonioRev/ListenYourMood/issues), [historias de usuario](https://github.com/AntonioRev/ListenYourMood/labels/user-stories) y [milestones](https://github.com/AntonioRev/ListenYourMood/milestones) propuestos en el proyecto.

## Herramientas necesarias
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [Información complementaria de las herramientas](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/herramientas.md) utilizadas para el desarrollo

## Instalación de las herramientas necesarias
En primer lugar, hay que instalar [Node](https://nodejs.org/en/) (junto con el gestor de paquetes por defecto de Node, [NPM](https://www.npmjs.com/get-npm)) con estos 3 comandos:

  > apk add -U curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils
  > curl -o- | bash https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
  > nvm install --lts

Node es un entorno de ejecución que nos permite ejecutar JavaScript en el servidor. Al ser ampliamente utilizado y tener muchas herramientas, posee su propio gestor de paquetes llamado NPM que se instala por defecto con Node. Con NPM instalaremos [Jest](https://jestjs.io/en/), un Framework de tests compatible con JS con numerosas funcionalidades. Para instalarlo:

  > pm install --global jest

El parámetro --global se usa para no instalar Jest en la misma carpeta del proyecto.
Para instalar el gestor de versiones [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)(Node Version Manager):

  > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash

El gestor de versiones nos permitirá cambiar la versión de Node.

## Test realizados
Los tests buscarán evaluar las funciones get y set de todas las variables de la clase Canción, con diferentes parámetros dentro de las variables.
Se probarán con diferentes valores entre 0 y 1, ambos inclusive.

Para ejecutar los tests, hay que utilizar el siguiente comando:

  > npm run test

## Configuración Inicial del proyecto
La [Configuración inicial](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/ConfiguracionInicial.md) necesaria para el comienzo del proyecto.

## Clase Principal
El fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js) contiene la clase principal del proyecto. Por ahora sólo contiene el constructor y un método sin implementar, pensado para usar los atributos introducidos por el usuario

## Fichero IV
El fichero [iv.yaml](https://github.com/AntonioRev/ListenYourMood/blob/master/iv.yaml) contiene la declaración de la entidad del proyecto, en este caso el fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js)

## Autor
*[Antonio José Revelles Pérez](https://github.com/AntonioRev)*
