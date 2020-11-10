# Herramientas que se van a usar
- **Lenguaje: Javascript**
*Se va a usar Javascript porque me gustaría aprenderlo más en profundidad y creo que se adapta bien al objetivo del proyecto, pudiendo ejecutarse en un servidor gracias a Node y teniendo muchas otras herramientas y frameworks disponibles.*

- **Entorno de ejecución: Node**
*Por tanto, como entorno en tiempo de ejecución se usará Node, pues es una forma de usar Javascript en el servidor bastante usual y cómoda, siendo una de las tecnologías punteras dentro del desarrollo de APIs.*

- **Herramienta de control de versiones: Node Version Manager (NVM)**
*Se utilizará Node Version Manager porque es el gestor de versiones más activo y actualizado para Node, puesto que los otros gestores de versiones tienen su último commit antes del verano (el que menos). Por tanto deberá ser el más utilizado, eso implica que seguramente tenga mayor información y resolución de problemas de los usuarios.*

- **Sistema de gestor de paquetes/dependencias y de gestor de tareas: NPM**
*Como gestor de paquetes para instalar Node y Jest se usará NPM porque es el gestor de paquetes por defecto de Node, viene con la propia instalación e instalar otro implicaría mayor sobrecarga sin sentido. Además, siendo este por defecto, debe ser el que mejor funciona. A su vez, también funciona como gestor de tareas, usando como script general de ejecución el archivo [package.json](https://github.com/AntonioRev/ListenYourMood/blob/master/package.json), pero nosotros usaremos Grunt*

- **Sistema gestor de tareas: Grunt**
*Se ha decidido usar Grunt como gestor de tareas porque ofrece mayor automatización y profundidad que NPM. A su vez, se ha escogido usar Grunt en vez de Gulp porque es más intuitivo para el usuario no experimentado, y aunque Gulp puede ser más rápido en cuestión de pruebas de velocidad, Grunt es más sencillo. A pesar de tener varios plugins de Jest, no compensa la dificultad del sistema.*

- **Framework de tests: Jest**
*Como Framework de tests se usará Jest por su simplicidad y su compatibilidad con Node y otros frameworks de Javascript, además de las numerosas aserciones y funciones enfocadas a los tests que ofrece, puesto que otros frameworks de tests no añaden aserciones o incluyen menos funcionalidades.*
