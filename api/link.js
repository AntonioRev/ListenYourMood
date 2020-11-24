/*

const Cancion = require('./cancion');
const Peticion = require('./peticion');

const errorPeticion = {
    error: 400,
    mensaje: "No se ha escrito ningún parámetro"
}

const errorBusqueda = {
    error: 404,
    mensaje: "No se ha encontrado ninguna canción, prueba otros parámetros"
}

const todoBien = {
    error: 200,
    mensaje: "Todo Bien"
}
module.exports = (req, res) => {
    if(req.body){
        var datos = req.body;
        var cancion = new Cancion( datos.acousticness, datos.danceability, datos.energy, datos.instrumentalness, datos.liveness, datos.loudness, datos.mode, datos.popularity, datos.speechiness, datos.valence );
        var peticion = new Peticion(cancion);
        var cancionesJSON = peticion.crearPeticion();

        if(cancionesJSON["seeds"]["afterFilteringSize"] > 0){
            var arrayCanciones = [];
            for (var atributo in cancionesJSON["tracks"]) {
                var cancionObtenida = [];
                cancionObtenida["nombre"] = atributo["name"];
                cancionObtenida["artista"] = atributo["artists"][0]["name"]
                cancionObtenida["album"] = atributo["album"]["name"]
                arrayCanciones.push(cancionObtenida);
                
            }
            res.status(200).send(JSON.stringify(todoBien));

        }
        else
            res.status(404).send(JSON.stringify(errorBusqueda));
        }
        else{
            res.status(400).send(JSON.stringify(errorPeticion));
        }
        
    }
*/
module.exports = (req, res) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
  }