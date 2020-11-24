## Herramientas de integración continua
Las herramientas de integración continua que se están utilizando son:

### TravisCI
[TravisCI](https://travis-ci.com/) es un sistema de integración continua con bastante compatibilidad con GitHub. En este caso, se está utilizando Travis para ejecutar los tests por medio del gestor de tareas de node, *npm*. Se necesita un archivo en el repositorio de la aplicación, *[.travis.yml](https://github.com/antoniorev/ListenYourMood/blob/master/.travis.yml)*, para que se ejecuten los tests. Se están realizando estas pruebas en:
>La última versión estable de *node*, pues tenemos que probar que la aplicación funciona en la última versión para no dejarla desactualizada.

>La última versión *LTS* estable, pues es importante probarla en versiones *LTS* porque son las versiones con soporte a largo plazo, necesarias si queremos una aplicación con un ciclo de vida longevo. 

>La versión 14.13.1, pues es la versión que se utiliza localmente para el desarrollo de la aplicación.

En [esta página](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) aparecen las buenas prácticas de Travis.
En los archivos [ejercicio9.md](https://github.com/antoniorev/EjerciciosIV/blob/main/Milestone4/ejercicio9.md) y [ejercicio10.md](https://github.com/antoniorev/EjerciciosIV/blob/main/Milestone4/ejercicio10.md) aparece la instalación de Travis en un repositorio.

### CircleCI
[CircleCI](https://circleci.com/) es un sistema de integración continua como Travis, pero con ciertas peculiaridades y mejoras, como escoger las especificaciones de procesador y ram sobre las que queremos que se ejecuten nuestros proyectos o mayor concurrencia de los trabajos que queremos ejecutar.
>En el caso de nuestra aplicación, usaremos CircleCI para ejecutar el [contenedor Docker](https://hub.docker.com/repository/docker/antoniorev/listenyourmood) diseñado en la práctica anterior (se puede ver en el archivo [config.yml](https://github.com/antoniorev/ListenYourMood/blob/master/.circleci/config.yml), dentro de la carpeta .circleci). Para ello, podremos utilizar el contenedor ya *buildeado* en DockerHub, así no tener que *rebuildearlo* nosotros. 

Se puede consultar [esta documentación](https://circleci.com/docs/2.0/building-docker-images/) para revisar la sintaxis acerca de cómo construir un contenedor Docker en CircleCI, aunque es bastante intuitiva. Se está utilizando la última versión de CircleCI, la *2.1*, porque es la última y la que incluye más funcionalidades (aunque no se estén usando ahora mismo, podrían ser útiles en el futuro).
En el archivo [circleCI.md](https://github.com/antoniorev/ListenYourMood/blob/master/docs/circleCI.md) aparece la instalación de CircleCI en un repositorio.