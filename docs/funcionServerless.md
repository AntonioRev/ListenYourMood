# Función Serverless
Para esta entrega se ha desarrollado un [fichero javascript](https://github.com/antoniorev/ListenYourMood/blob/master/api/lista.js) que se encargue de recibir una petición y devolver un Objeto JSON.

En concreto, lo que realiza la función implementada es realizar una petición al servidor de Spotify con parámetros musicales introducidos a través de *Query* y obtener (por medio de un JSON) información muy detallada (incluso con metadatos de Spotify) acerca de las canciones que encajan con dichos parámetros. Esa información es depurada por la función, manteniendo sólamente el nombre de la canción, el autor y el álbum. Por último, se devuelven las canciones obtenidas en formato JSON.

En el caso de que no se encuentre ninguna canción con los parámetros introducidos, o no se introduzca ningún parámetro, se responde con un mensaje de error en formato JSON con su código de error y la causa del fallo.

Esto hace que avance bastante la [Historia de usuario #1](https://github.com/antoniorev/ListenYourMood/issues/1), puesto que ya se puede, aunque de forma poco cómoda e intuitiva, recomendar una lista de canciones según el estado de ánimo del usuario.