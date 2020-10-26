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
- **Lenguaje: Javascript**
*Se va a usar Javascript porque me gustaría aprenderlo más en profundidad y creo que se adapta bien al objetivo del proyecto, pudiendo ejecutarse en un servidor gracias a Node y teniendo muchas otras herramientas y frameworks disponibles.*

- **Entorno de ejecución: Node**
*Por tanto, como entorno en tiempo de ejecución se usará Node, pues es una forma de usar Javascript en el servidor bastante usual y cómoda, siendo una de las tecnologías punteras dentro del desarrollo de APIs.*

- **Herramienta de control de versiones: Node Version Manager (NVM)**
*Se utilizará Node Version Manager porque es el gestor de versiones más activo y actualizado para Node, puesto que los otros gestores de versiones tienen su último commit antes del verano (el que menos). Por tanto deberá ser el más utilizado, eso implica que seguramente tenga mayor información y resolución de problemas de los usuarios.*

- **Sistema de gestor de paquetes/dependencias y de gestor de tareas: NPM**
*Como gestor de paquetes para instalar Node y Jest se usará NPM porque es el gestor de paquetes por defecto de Node, viene con la propia instalación e instalar otro implicaría mayor sobrecarga sin sentido. Además, siendo este por defecto, debe ser el que mejor funciona. A su vez, también funciona como gestor de tareas, usando como script general de ejecución el archivo [package.json](https://github.com/AntonioRev/ListenYourMood/blob/master/package.json)*

- **Framework de tests: Jest**
*Como Framework de tests se usará Jest por su simplicidad y su compatibilidad con Node y otros frameworks de Javascript, además de las numerosas aserciones y funciones enfocadas a los tests que ofrece, puesto que otros frameworks de tests no añaden aserciones o incluyen menos funcionalidades.*

En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [Información complementaria de las herramientas](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/herramientas.md) utilizadas para el desarrollo

## Instalación de las herramientas necesarias
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

## Test realizados
Los tests buscarán evaluar las funciones get y set de todas las variables de la clase Canción, con diferentes parámetros dentro de las variables.
Se probarán con diferentes valores entre 0 y 1, ambos inclusive, valores superiores a 1 e inferiores a 0 para que detecte que se ha pasado el valor, y también se probarán con valores nulos o indefinidos, ambos válidos.

Para ejecutar los tests, hay que utilizar el siguiente comando:

  > npm run test

## Imagen de Docker para realización de tests
Se ha creado un contenedor Docker para la realización de los tests de la aplicación en cualquier ámbito que se desee. Para ello, se ha necesitado una imagen (para correr el contenedor) que fuese [compatible con Node](https://hub.docker.com/_/node). De todas las posibles, se ha elegido la imagen **15.0.1-alpine3.10**, porque las diferencias de tiempo eran insignificantes entre las diferentes imágenes testeadas, y ésta era la de menor tamaño, con 174 MB. Para mayor información y entendimiento del proceso de elección de imagen con respecto a todas las disponibles, consultar el archivo [imagenesDocker.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/imagenesDocker.md) en la carpeta docs.

La imagen creada ha sido [subida a DockerHub](https://hub.docker.com/repository/docker/antoniorev/listenyourmood) y linkeada con este proyecto de GitHub, donde cada vez que se hace un *push*, se actualiza el archivo *readme* de DockerHub y se buildea para ver si funciona.

La imagen también se ha añadido a GitHub Containter Registry, y se ha añadido como [paquete del proyecto](https://github.com/users/AntonioRev/packages/container/package/listenyourmood).

## Configuración Inicial del proyecto
La [Configuración inicial](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/ConfiguracionInicial.md) necesaria para el comienzo del proyecto.

## Clase Principal
El fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js) contiene la clase principal del proyecto. Por ahora sólo contiene el constructor y un método sin implementar, pensado para usar los atributos introducidos por el usuario

## Fichero IV
El fichero [iv.yaml](https://github.com/AntonioRev/ListenYourMood/blob/master/iv.yaml) contiene la declaración de la entidad del proyecto, en este caso el fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js)

## Autor
*[Antonio José Revelles Pérez](https://github.com/AntonioRev)*
