# Tests realizados

Para ejecutar los tests, hay que utilizar el siguiente comando:

  > grunt test

## Tests de la clase Canción
Los tests buscarán evaluar las funciones get y set de todas las variables de la clase Canción, con diferentes parámetros dentro de las variables.
Se probarán con diferentes valores entre 0 y 1, ambos inclusive, valores superiores a 1 e inferiores a 0 para que detecte que se ha pasado el valor, y también se probarán con valores nulos o indefinidos, ambos válidos.

## Tests de la clase Petición
Estos tests buscarán evaluar que las urls que se generan sean válidas para la API de Spotify, usando expresiones regulares para comprobar la forma de dichar url. También comprueba el set y get de la url, por si no necesitamos que se genere automáticamente y queremos introducirla nosotros a mano, y un método *crearPetición*, el cual si el campo de los parámetros está vacío nos devuelve un error.

## Tests del fichero Lista
Estos tests se encargan de comprobar las diferentes peticiones que se mandan al servidor, y comprobar los resultados que se obtienen, por medio de expresiones regulares o bien estudiando el código de error que devuelven. Por ejemplo, si hacemos una petición de un género o un artista que no existe nos debería devolver un *Error 404*. Si hacemos una petición correcta, comprueba por medio de expresiones regulares que tenga la estructura JSON deseada.

