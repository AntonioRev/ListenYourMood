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
module.exports = async (req, res) => {
    if(req.query){
        
        var cancion = new Cancion( parseFloat(req.query['acousticness']) || null, parseFloat(req.query['danceability']) || null, parseFloat(req.query['energy']) || null, parseFloat(req.query['instrumentalness']) || null, parseFloat(req.query['liveness']) || null, parseFloat(req.query['loudness']) || null, parseFloat(req.query['mode']) || null, parseFloat(req.query['popularity']) || null, parseFloat(req.query['speechiness']) || null, parseFloat(req.query['valence']) || null );
        var peticion = new Peticion(cancion);
        
        peticion.crearPeticion(function(err, data){
                if(!err){
                    cancionesJSON = data;

                    if(parseInt(cancionesJSON['seeds'][0]['afterFilteringSize']) > 0){
                        var arrayCanciones = [];
                        for (var atributo in cancionesJSON['tracks']) {
                            var cancionObtenida = {};
                            cancionObtenida["nombre"] = (cancionesJSON['tracks'][atributo]['name']);
                            cancionObtenida["artista"] = (cancionesJSON['tracks'][atributo]['artists'][0]['name']);
                            cancionObtenida["album"] = (cancionesJSON['tracks'][atributo]['album']['name']);
                            
                            arrayCanciones.push(cancionObtenida);
                            
                        }
                        lista = {
                            canciones: arrayCanciones
                        }
                        res.status(200).send(lista);
                        
                    }
                    else
                    res.status(404).send(JSON.stringify(errorBusqueda));
                }
                else{
                    res.status(400).send(JSON.stringify(err));
                }
            }
            );
        
    }
    else{
        res.status(400).send(JSON.stringify(errorPeticion));
    }
        
}
