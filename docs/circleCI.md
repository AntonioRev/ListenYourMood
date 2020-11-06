Los pasos para sincronizar [CircleCI](https://circleci.com/) con GitHub son parecidos a Travis.

1. El primer paso es autorizar a CircleCI con nuestro usuario de GitHub:

![Autorizacion CircleCI](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/autorizacionCircleCI.png)

2. Después, una vez iniciamos sesión nos aparecerá esta ventana con nuestros proyectos de GitHub:

![proyectos CircleCI](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/proyectosCircleCI.png)

Clickamos en *Set Up Project* del proyecto en el que queramos utilizar CircleCI, y nos aparecerá esta ventana:

![Autorizacion CircleCI](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/archivoNoAñadidoCircleCI.png)

Pulsamos en *Download config.yml*, nos descargará un archivo llamado [config.yml](https://github.com/antoniorev/ListenYourMood/blob/master/.circleci/config.yml) y lo guardamos en el mismo directorio que nuestro proyecto.

3. Escribimos las reglas que queramos para la ejecución de CircleCI:

![Sintaxis CircleCI](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/sintaxisCircleCI.png)

Y ya estaría, la próxima vez que hagamos un push, se ejecutará en CircleCI las directrices que hayamos escrito en el archivo:

![Ejecucion CircleCI](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/ejecucionCircleCI.png)
