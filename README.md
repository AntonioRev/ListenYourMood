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
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [información acerca de las herramientas](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/herramientas.md) utilizadas para el desarrollo de esta aplicación.

## Instalación de las herramientas necesarias
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta el [proceso de instalación](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/instalacionHerramientas.md) de las herramientas necesarias para la ejecución de esta aplicación.

## Test realizados
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [información acerca de los tests](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/tests.md) usados para evaluar la consistencia de la aplicación.

## Imagen de Docker para realización de tests
Se puede consultar acerca de la [imagen de Docker creada](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/Docker.md) y del [proceso de elección de imagen](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/imagenesDocker.md) con respecto a todas las disponibles.

## Herramientas de integración continua
Las herramientas de integración continua que se están utilizando son:
- [TravisCI](https://travis-ci.com/): Es un sistema de integración continua con bastante compatibilidad con GitHub. En este caso, se está utilizando Travis para ejecutar los tests por medio del gestor de tareas de node, *npm*. Se necesita un archivo en el repositorio de la aplicación, *[.travis.yml](https://github.com/antoniorev/ListenYourMood/blob/master/.travis.yml)*, para que se ejecuten los tests. Se están realizando estas pruebas en las versiones 10, 11, 14 y 15 de node. En [esta página](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) aparecen las buenas prácticas de Travis.
En los archivos [ejercicio9.md](https://github.com/antoniorev/EjerciciosIV/blob/main/Hito4/ejercicio9.md) y [ejercicio10.md](https://github.com/antoniorev/EjerciciosIV/blob/main/Hito4/ejercicio10.md) aparece la instalación de Travis en un repositorio.


- [CircleCI](https://circleci.com/): Es un sistema de integración continua como Travis, pero con ciertas peculiaridades y mejoras, como escoger las especificaciones de procesador y ram sobre las que queremos que se ejecuten nuestros proyectos o mayor concurrencia de los trabajos que queremos ejecutar. En el caso de nuestra aplicación, usaremos CircleCI para construir y ejecutar el [contenedor Docker](https://github.com/antoniorev/ListenYourMood/blob/master/Dockerfile) diseñado en la práctica anterior (se puede ver en el archivo [config.yml](https://github.com/antoniorev/ListenYourMood/blob/master/.circleci/config.yml), dentro de la carpeta .circleci). Se puede consultar [esta documentación](https://circleci.com/docs/2.0/building-docker-images/) para revisar la sintaxis acerca de cómo construir un contenedor Docker en CircleCI, aunque es bastante intuitiva. Se está utilizando la última versión de CircleCI, la *2.1*, porque es la última y la que incluye más funcionalidades (aunque no se estén usando ahora mismo, podrían ser útiles en el futuro).
En el archivo [circleCI.md](https://github.com/antoniorev/ListenYourMood/blob/master/docs/circleCI.md) aparece la instalación de CircleCI en un repositorio.

## Configuración Inicial del proyecto
La [Configuración inicial](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/ConfiguracionInicial.md) necesaria para el comienzo del proyecto.

## Clase Principal
El fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js) contiene la clase principal del proyecto. Por ahora sólo contiene el constructor y un método sin implementar, pensado para usar los atributos introducidos por el usuario

## Fichero IV
El fichero [iv.yaml](https://github.com/AntonioRev/ListenYourMood/blob/master/iv.yaml) contiene la declaración de la entidad del proyecto, en este caso el fichero [cancion.js](https://github.com/AntonioRev/ListenYourMood/blob/master/src/cancion.js)

## Autor
*[Antonio José Revelles Pérez](https://github.com/AntonioRev)*
