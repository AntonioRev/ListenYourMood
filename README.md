# *ListenYourMood* :musical_note:

## Descripción del problema a resolver
Últimamente estoy harto de salir del trabajo y pensar:
  > Me gustaría escuchar música tranquila, pero el maldito aleatorio en las canciones de Spotify hace que pase de *El Concierto de Aranjuez* a *Thunderstruck*, maldita sea.
  
Por ello, he decidido implementar una API, la cual dependiendo del género y de mi estado de ánimo me recomiende una lista de reproducción en Spotify.
A su vez, y por comodidad, se añadirá una opción para poder reproducir la lista de reproducción en la misma aplicación, sin necesidad de salir de la misma o tener que ir a otra página o aplicación

Para el desarrollo de este proyecto será necesario utilizar en algún momento un repositorio en el que se encuentra una [API de autenticación de Spotify](https://github.com/spotify/web-api-auth-examples). A partir de ahí se podrá ejecutar la aplicación pues se necesita un *token* para realizar peticiones al servidor de Spotify.


## Herramientas y funciones Serverless

Se ha desarrollado una [función Serverless](https://github.com/antoniorev/ListenYourMood/blob/master/api/lista.js) que nos mostrará una lista de canciones según una serie de parámetros musicales que introduzcamos. Esta función está desplegada en un servidor de [Vercel](https://vercel.com/) de forma gratuita.

El [link de despliegue](https://listen-your-mood.vercel.app/api/lista?acousticness=0.7&energy=0.7) se encuentra en el fichero [iv.yaml](https://github.com/antoniorev/ListenYourMood/blob/master/iv.yaml).

En la carpeta *docs* se puede encontrar más información acerca de la [configuración de Vercel](https://github.com/antoniorev/ListenYourMood/blob/master/docs/configuracionVercel.md) y de la [explicación de la función Serverless](https://github.com/antoniorev/ListenYourMood/blob/master/docs/funcionServerless.md).


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
