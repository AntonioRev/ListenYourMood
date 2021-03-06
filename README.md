# *ListenYourMood* :musical_note:


## Descripción del problema a resolver
Últimamente estoy harto de salir del trabajo y pensar:
  > Me gustaría escuchar música tranquila, pero el maldito aleatorio en las canciones de Spotify hace que pase de *El Concierto de Aranjuez* a *Thunderstruck*, maldita sea.
  
Por ello, he decidido implementar una API, la cual dependiendo del género y de mi estado de ánimo me recomiende una lista de reproducción en Spotify.
A su vez, y por comodidad, se añadirá una opción para poder reproducir la lista de reproducción en la misma aplicación, sin necesidad de salir de la misma o tener que ir a otra página o aplicación

Para el desarrollo de este proyecto es necesario utilizar un usuario de Spotify por defecto, para poder generar un *token* para realizar peticiones al servidor de Spotify.

## Microservicios y Routing
En el fichero [api/lista.js](https://github.com/antoniorev/ListenYourMood/blob/master/api/lista.js) se han implementado una serie de funciones que se ejecutan con las diferentes peticiones al servidor según la ruta indicada. Como avance del proyecto se han implementado:
  - Una petición para obtener todos los géneros disponibles en Spotify.
  - Una petición que se encargue de, a partir del género introducido, obtener su ID de la API de Spotify y volver a hacer una petición al servidor de Spotify para generar una playlist en relación a dicho ID.
  - Una petición igual que la anterior pero para obtener una playlist en relación a un artista.
  - Una petición igual que la anterior pero para obtener el top canciones del artista introducido.

El fichero [api/servidor.js](https://github.com/antoniorev/ListenYourMood/blob/master/api/servidor.js) es el fichero que se ejecuta en Node para levantar el servidor. Así se desacopla las funciones del servidor con el servidor en sí.

Para la configuración distribuida, se ha utilizado *etcd3* y la biblioteca de node *node-etcd*. Dentro del código del fichero [servidor.js](https://github.com/antoniorev/ListenYourMood/blob/master/api/servidor.js) se crea una instancia de etcd para obtener el puerto de la variable de entorno *port*. Si está vacía, se asigna por defecto el puerto 3000.

El framework escogido para gestionar los Microservicios ha sido *Express*, frente a otras opciones como *Nest* o *Hapi*. Dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se encuentra el archivo [frameworkParaMicroservicios.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/frameworkParaMicroservicios.md), donde se explica el motivo de la elección de Express frente a las otras opciones.

La explicación sobre cómo se usa *Express* dentro de la API se encuentra en el archivo [express.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/express.md), dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)*.

Las posibles peticiones a realizar al servidor se encuentran explicadas en el archivo [peticionesAPI.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/peticionesAPI.md), dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)*.

Los tests para dichas peticiones se encuentran en el fichero [lista.test.js](https://github.com/antoniorev/ListenYourMood/blob/master/tests/lista.test.js). Utilizan *Jest* y *Supertest* para realizar dichos tests, evaluando lo que devuelve cada petición variando los parámetros introducidos. Dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se encuentra el archivo [tests.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/testsPeticion.md), donde se explica lo realizado en cada uno de los tests.

## Documentación añadida
Todos los ficheros de documentación se encuentran en la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)*.
### Herramientas y funciones Serverless
En la carpeta *docs* se puede encontrar más información acerca de la [configuración de Vercel](https://github.com/antoniorev/ListenYourMood/blob/master/docs/configuracionVercel.md) y de la [explicación de la función Serverless](https://github.com/antoniorev/ListenYourMood/blob/master/docs/funcionServerless.md) (esta función ha sido sustituida por las diferentes funciones para los microservicios, por tanto el link está obsoleto).


### Pasos realizados (Issues / Milestones)
Dentro de la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se encuentra el archivo [pasos.md](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/pasos.md), que irá reflejando los pasos que se den en los diferentes estados de la aplicación. Estos pasos deberán relacionarse con los diferentes [issues](https://github.com/AntonioRev/ListenYourMood/issues), [historias de usuario](https://github.com/AntonioRev/ListenYourMood/labels/user-stories) y [milestones](https://github.com/AntonioRev/ListenYourMood/milestones) propuestos en el proyecto.

### Herramientas necesarias
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [información acerca de las herramientas](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/herramientas.md) utilizadas para el desarrollo de esta aplicación.

### Instalación de las herramientas necesarias
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta el [proceso de instalación](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/instalacionHerramientas.md) de las herramientas necesarias para la ejecución de esta aplicación.

### Test realizados
En la carpeta *[docs](https://github.com/AntonioRev/ListenYourMood/tree/master/docs)* se aporta [información acerca de los tests](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/tests.md) usados para evaluar la consistencia de la aplicación.

### Imagen de Docker para realización de tests
Se puede consultar acerca de la [imagen de Docker creada](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/Docker.md) y del [proceso de elección de imagen](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/imagenesDocker.md) con respecto a todas las disponibles.

### Herramientas de integración continua
Se puede consultar acerca de la [herramientas de integración continua](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/Docker.md) que se están utilizando dentro de la carpeta *docs*.


### Configuración Inicial del proyecto
La [Configuración inicial](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/ConfiguracionInicial.md) necesaria para el comienzo del proyecto.

## Autor
*[Antonio José Revelles Pérez](https://github.com/AntonioRev)*
