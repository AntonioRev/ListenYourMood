const Cancion = require('./cancion');
const Peticion = require('./peticion');
var request = require('request');

var tokenPeticion = '';
const id_cliente = 'f6b72ddbdc2f46ec9649a03e6952736e'; // El id de la cuenta que vamos a utilizar para las peticiones
const num_secreto = '2d98b8dc0df544bb9f774af2f7d50409'; // Numero secreto necesario para autenticación

const errorPeticion = {
    error: 400,
    mensaje: "No se ha escrito ningún parámetro"
}

const errorBusqueda = {
    error: 404,
    mensaje: "No se ha encontrado ninguna canción, prueba otros parámetros"
}

module.exports = async (req, res) => {
    
    if(req.query){
        
        var cancion = new Cancion( parseFloat(req.query['acousticness']) || null, parseFloat(req.query['danceability']) || null, parseFloat(req.query['energy']) || null, parseFloat(req.query['instrumentalness']) || null, parseFloat(req.query['liveness']) || null, parseFloat(req.query['loudness']) || null, parseFloat(req.query['mode']) || null, parseFloat(req.query['popularity']) || null, parseFloat(req.query['speechiness']) || null, parseFloat(req.query['valence']) || null);
        var peticion = new Peticion(cancion);
        
                          
                        lista = {
                            url: peticion.url
                        }
                        res.status(200).send(lista);
        
    }
    else{
        res.status(400).send(JSON.stringify(errorPeticion));
    }
        
}