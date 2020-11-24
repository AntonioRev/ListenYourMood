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
    if(req.query){
        
        var cancion = new Cancion( parseInt(req.query['acousticness']) || null, parseInt(req.query['danceability']) || null, parseInt(req.query['energy']) || null, parseInt(req.query['instrumentalness']) || null, parseInt(req.query['liveness']) || null, parseInt(req.query['loudness']) || null, parseInt(req.query['mode']) || null, parseInt(req.query['popularity']) || null, parseInt(req.query['speechiness']) || null, parseInt(req.query['valence']) || null );
        var peticion = new Peticion(cancion);
        /*
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
            res.status(200).send(JSON.stringify(arrayCanciones));
            
        }
        else
        res.status(404).send(JSON.stringify(errorBusqueda));
         */
        res.status(200).send(cancion.toString());
    }
    else{
        res.status(400).send(JSON.stringify(errorPeticion));
    }
        
}
