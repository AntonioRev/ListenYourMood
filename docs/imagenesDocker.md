## Imágenes probadas
Las [imágenes de Docker](https://hub.docker.com/_/node) (compatibles con Node) que se han probado para ejecutar los tests han sido:
- *15.0.1-alpine3.10*
- *15.0.1-alpine3.12*
- *15.0.1-buster-slim*
- *15.0.1-stretch-slim*
- *14.14.0-alpine3.12*

Se han escogido estas imágenes porque son las más ligeras, ya que la diferencia de tiempo para este proyecto no sería reseñable, ni mucho menos útil, ya que perderíamos bastante espacio de almacenamiento en comparación con la mejoría de tiempo. El espacio ocupado por las imágenes ya buildeadas es:

![tamaño imagenes](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/espacioImagenes.png)

### Pruebas de tiempo
Haciendo pruebas de rendimiento en la ejecución de los tests, las diferencias de tiempo entre imágenes son demasiado poco significativas como para tomarlas en cuenta. 

#### 15.0.1-alpine3.10
![tiempo 15.0.1-alpine3.10](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/tiempo_alpine3-10.png)

#### 15.0.1-alpine3.12
![tiempo 15.0.1-alpine3.12](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/tiempo_alpine3-12.png)

#### 15.0.1-buster-slim
![tiempo 15.0.1-buster-slim](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/tiempo_buster-slim.png)

#### 15.0.1-stretch-slim
![tiempo 15.0.1-stretch-slim](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/tiempo_stretch-slim.png)

#### 14.14.0-alpine3.12
![tiempo 14.14.0-alpine3.12](https://github.com/AntonioRev/ListenYourMood/blob/master/docs/images/tiempo_14alpine3-10.png)

### Conclusión
La variabilidad de los resultados hace que en cada prueba haya una imagen más rápida distinta a la anterior prueba. Si a ésto añadimos que la diferencia de tiempo entre resultados es insignificante para este proyecto, se llega a la conclusión de que se debería coger la imagen con menor tamaño, es decir, la imagen "**15.0.1-alpine3.10**", ya que en rendimiento no se ve ninguna ganadora. En el caso de otro proyecto, quizá sí interesaría la imagen más rápida, pero en este caso no.