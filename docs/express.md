# Express dentro de la API
En el archivo [lista.js](https://github.com/antoniorev/ListenYourMood/blob/master/api/lista.js) se encuentra todo el código en el que se usa Express.js

En este archivo, nos encargamos de manejar las peticiones que llegan, y dependiendo de la ruta que se introduzca se ejecutarán unas funciones u otras.

En el fichero se importa tanto Express como el paquete módulo *Request*, pues con Express manejaremos las peticiones a nuestro servidor, y con Request lanzaremos peticiones al servidor de Spotify para obtener los datos que pida el usuario.

### Funciones
Las únicas tres funciones de Express que se utilizan son **use**, **get** y **listen**.

- **Use** es utilizada para la función **Middleware**. En este caso, nuestra función Middleware es *generarToken*, una función que se encarga de generar un token (para Spotify) con cada petición que se realice, pues para realizar CUALQUIER petición a Spotify necesitamos un token de autenticación. Se podría designar un Middleware distinto para cada función añadiéndolo como parámetro en una llamada a la función *get*, pero para nuestro caso queremos que se ejecute siempre que se haga una petición a nuestra API.

- **Get** es utilizada para manejar las peticiones que lleguen al servidor. Como parámetros de la función *get* se introduce la ruta que se solicita, y como segundo parámetro la función que queremos que se ejecute al solicitar dicha ruta. La estructura es similar para todas las funciones:
    1. Se comprueba que la ruta y/o los parámetros introducidos son correctos.
    2. Se realiza la petición a Spotify.
    3. (A veces) se vuelve a hacer una petición a Spotify por si no se pueden conseguir todos los datos solicitados en una sola petición.
    4. Si ha habido algún error, es manejado por la propia función devolviendo el error y la causa del mismo. 
    5. Si todo ha ido bien, devuelve los datos solicitados.

- **Listen** es utilizada para que la API se ponga a "escuchar" las solicitudes en el puerto indicado (por defecto el puerto 3000). Manda un mensaje cuando la aplicación se inicia:
    > `API escuchando en: http://localhost:3000`

Las funciones devuelven un JSON (convertido en string) que contienen o los datos solicitados o un mensaje de error con la causa.

### Tests
Para realizar los tests, vamos a usar el framework *Jest*, que es el que venimos usando para los tests de las otras clases, y el framework *Supertest*, que es una librería para testear servidores HTTP basados en Nodejs.

### Logs
Como *Logger* se ha escogido **[Morgan](https://github.com/expressjs/morgan)** por su sencillez y fácil incorporación al proyecto. Este *logger* almacena en un archivo llamado *access.log*, con una estructura de:
> Fecha                           -> "Método URL          HTTP/Version" Estado TiempoDeRespuesta

> [Sat, 12 Dec 2020 01:14:17 GMT] -> "GET    /genero/rock HTTP/1.1"     200  - 372.289 ms
