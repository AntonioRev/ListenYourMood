# Framework escogido para construir los microservicios

Se han barajado 3 frameworks de aplicaciones web para construir los microservicios:

- **[Express.js](https://expressjs.com/es/)**
- **[Nest.js](https://nestjs.com/)**
- **[Hapi](https://hapi.dev/)**

Los 3 frameworks pueden ser utilizados para construir la estructura que se busca, sin embargo:

- Express por sí mismo es útil y funciona bien, pero Hapi es más simple de entender y tiene una mejor modularización.
- Hapi no abraza el concepto de *Middleware*, sino que lo rechaza. En su página web textualmente escriben:
    > *Middleware is just another name for bad design*

- Nest es más completo que Express, pero a la vez estamos añadiendo funcionalidades no necesarias, pues Express contiene lo necesario. Nest es buena opción, pero engloba demasiado para lo que queremos hacer realmente.
- Aunque se puede modificar, por defecto Nest crea una estructura personalizada al empezar a funcionar, añadiendo ficheros y módulos. Nest se enfoca para que en el momento que comencemos con el proyecto podamos desplegarlo. Si empezásemos de 0 un proyecto, sería una opción muy conveniente, pero no es el caso.
- Nest se convierte en un framework realmente complejo cuando te alejas de la línea de desarrollo ofrecida por la documentación.
- Los 3 tienen una gran comunidad detrás y actualizaciones frecuentes.

Por estas razones, he decidido escoger **Express** para desarrollar los microservicios, ya que aunque no es el más completo, nos sirve para lo que necesitamos.