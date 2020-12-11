var express = require('express');
var request = require('request');
const Cancion = require('./cancion');
const Peticion = require('./peticion');

var tokenPeticion = '';
const id_cliente = 'f6b72ddbdc2f46ec9649a03e6952736e'; // El id de la cuenta que vamos a utilizar para las peticiones
const num_secreto = '2d98b8dc0df544bb9f774af2f7d50409'; // Numero secreto necesario para autenticación

const errorServer = {
    error: 500,
    mensaje: "Error del servidor"
}


var app = express();
const port = process.env.PORT || 3000

/** FUNCION MIDDLEWARE: 
 *  Generar un token necesario para hacer peticiones a spotify
*/ 
var generarToken = function (req, res, next) {
    var OpcionesAutorizacion = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(id_cliente + ':' + num_secreto).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };
      
      request.post(OpcionesAutorizacion, function(error, response, body) {
        if (!error && response.statusCode === 200) {
      
            tokenPeticion = body.access_token;
            next();
            
        }else{
            res.status(500).send(JSON.stringify({
                error: 500,
                mensaje: "ERROR DEL SERVIDOR: No se ha podido generar el token"
            }));
        }
      });
  };


app.use(generarToken);


/**
 * PLAYLIST POR GENERO:
 * Te devuelve una playlist de canciones según el género introducido,
 * pudiendo añadir parámetros del estilo musical que apetece al usuario
 */
app.get('/genero/:g', function(req, res) {
    if(req.query){
        
        var cancion = new Cancion( parseFloat(req.query['acousticness']) || null, parseFloat(req.query['danceability']) || null, parseFloat(req.query['energy']) || null, parseFloat(req.query['instrumentalness']) || null, parseFloat(req.query['liveness']) || null, parseFloat(req.query['loudness']) || null, parseFloat(req.query['mode']) || null, parseFloat(req.query['popularity']) || null, parseFloat(req.query['speechiness']) || null, parseFloat(req.query['valence']) || null, req.params.g || "rock", false );
        
        var peticion = new Peticion(cancion);
        peticion.token = tokenPeticion;
        
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
                        arrayCanciones.sort(function(a, b) {
                            var keyA = a["nombre"],
                            keyB = b["nombre"];
                            // Compare the 2 dates
                            if (keyA < keyB) return -1;
                            if (keyA > keyB) return 1;
                            return 0;
                        });
                        
                        lista = {
                            canciones: arrayCanciones
                        }
                        res.status(200).send(lista);
                        
                    }
                    else
                    res.status(404).send(JSON.stringify({
                        error: 404,
                        mensaje: "No se ha encontrado ninguna canción con esas condiciones"
                    }));
                }
                else{
                    res.status(500).send(JSON.stringify({
                        error: 500,
                        mensaje: "ERROR DEL SERVIDOR: No se ha podido generar la petición"
                    }));
                }
            }
            );
            
        }
        else{
            res.status(400).send(JSON.stringify({
                error: 400,
                mensaje: "No se ha escrito ningún parámetro de búsqueda"
            }));
        }
    });
    
/**
 * OBTENER GENEROS:
 * Te devuelve los géneros disponibles, sobre los
 * que puedes basar tu playlist
 */
app.get('/generos', function(req, res) {
    var urlPeticion = "https://api.spotify.com/v1/recommendations/available-genre-seeds";

    
    var peticion = {
        url: urlPeticion,
        headers: {
            'Authorization': 'Bearer ' + tokenPeticion,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        json: true
        };
        
        request.get(peticion, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.status(200).send(body['genres']);
        
        }
        else if(!error){
            res.status(response.statusCode);
        }else{
            res.status(500).send(JSON.stringify({
                error: 500,
                mensaje: "ERROR DEL SERVIDOR: No se ha podido generar los géneros"
            }));
        }
        });


    });

/**
 * TOP CANCIONES DE UN ARTISTA:
 * Te devuelve una playlist de las mejores canciones
 * (segun spotify) de un artista
 */
app.get('/artista/:nombreArtista/top', function(req, res) {
    if (req.params.nombreArtista){
        var urlPeticion = "https://api.spotify.com/v1/search?q=" + req.params.nombreArtista + "&type=artist";
    
        var peticion = {
            url: urlPeticion,
            headers: {
                'Authorization': 'Bearer ' + tokenPeticion,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            json: true
        };
            
        request.get(peticion, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            if(parseInt(body['artists']['total']) > 0){
                var nombreArtista = body['artists']['items'][0]['name'];
                var idArtista = body['artists']['items'][0]['id'];
                
                urlPeticion = "https://api.spotify.com/v1/artists/" + idArtista + "/top-tracks?market=ES";
                
                peticion = {
                    url: urlPeticion,
                    headers: {
                        'Authorization': 'Bearer ' + tokenPeticion,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    json: true
                };
                
                request.get(peticion, function(error2, response2, body2) {
                    if (!error2 && response2.statusCode === 200) {
                        
                        
                            var arrayCanciones = [];
                            for (var atributo in body2['tracks']) {
                                var cancionObtenida = {};
                                cancionObtenida["nombre"] = (body2['tracks'][atributo]['name']);
                                cancionObtenida["album"] = (body2['tracks'][atributo]['album']['name']);
                                
                                arrayCanciones.push(cancionObtenida);
                                
                            }
                            arrayCanciones.sort(function(a, b) {
                                var keyA = a["nombre"],
                                keyB = b["nombre"];
                                // Compare the 2 dates
                                if (keyA < keyB) return -1;
                                if (keyA > keyB) return 1;
                                return 0;
                            });
                            
                            lista = {
                                artista: nombreArtista,
                                "Sus 10 canciones más escuchadas": arrayCanciones
                            }
                            res.status(200).send(lista);
                                                    
                    }
                    else if(!error2){
                        res.status(response2.statusCode).send(JSON.stringify({
                            error: response2.statusCode,
                            mensaje: "ERROR DEL SERVIDOR: No se han podido generar las canciones del artista"
                        }));
                    }else{
                        res.status(500).send(JSON.stringify({
                            error: 500,
                            mensaje: "ERROR DEL SERVIDOR: No se han podido generar las canciones del artista"
                        }));
                    }
                });
                
            }
            else
            res.status(404).send(JSON.stringify({
                error: 404,
                mensaje: "No se ha encontrado ningún artista con ese nombre"
            }));
        
        }
        else if(!error){
            res.status(response.statusCode).send(JSON.stringify(errorServer));
        }else{
            res.status(500).send(JSON.stringify({
                error: 500,
                mensaje: "ERROR DEL SERVIDOR: No se ha encontrado ningún artista con ese nombre"
            }));
        }
        });
            
    }else{
        res.status(400).send(JSON.stringify({
            error: 400,
            mensaje: "No se ha introducido ningún artista"
        }));
    }
});

/**
 * PLAYLIST POR ARTISTA:
 * Te devuelve una playlist de canciones en relación al artista 
 * introducido (las canciones no tienen por que ser del artista),
 * pudiendo añadir parámetros del estilo musical que apetece al usuario
 */
app.get('/artista/:nombreArtista', function(req, res) {
    if (req.params.nombreArtista){
        var urlPeticion = "https://api.spotify.com/v1/search?q=" + req.params.nombreArtista + "&type=artist";
    
        var peticion = {
            url: urlPeticion,
            headers: {
                'Authorization': 'Bearer ' + tokenPeticion,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            json: true
        };
            
        request.get(peticion, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            if(parseInt(body['artists']['total']) > 0){
                var nombreArtista = body['artists']['items'][0]['name'];
                var idArtista = body['artists']['items'][0]['id'];
                var cancion = new Cancion( parseFloat(req.query['acousticness']) || null, parseFloat(req.query['danceability']) || null, parseFloat(req.query['energy']) || null, parseFloat(req.query['instrumentalness']) || null, parseFloat(req.query['liveness']) || null, parseFloat(req.query['loudness']) || null, parseFloat(req.query['mode']) || null, parseFloat(req.query['popularity']) || null, parseFloat(req.query['speechiness']) || null, parseFloat(req.query['valence']) || null, idArtista, true );
        
                var peticion = new Peticion(cancion);
                peticion.token = tokenPeticion;
                
                peticion.crearPeticion(function(err, data){
                    if(!err){
                            cancionesJSON = data;
                            console.log(cancionesJSON);
                            if(parseInt(cancionesJSON['seeds'][1]['afterFilteringSize']) > 0){
                                var arrayCanciones = [];
                                for (var atributo in cancionesJSON['tracks']) {
                                    var cancionObtenida = {};
                                    cancionObtenida["nombre"] = (cancionesJSON['tracks'][atributo]['name']);
                                    cancionObtenida["artista"] = (cancionesJSON['tracks'][atributo]['artists'][0]['name']);
                                    cancionObtenida["album"] = (cancionesJSON['tracks'][atributo]['album']['name']);
                                    
                                    arrayCanciones.push(cancionObtenida);
                                    
                                }
                                arrayCanciones.sort(function(a, b) {
                                    var keyA = a["nombre"],
                                    keyB = b["nombre"];
                                    // Compare the 2 dates
                                    if (keyA < keyB) return -1;
                                    if (keyA > keyB) return 1;
                                    return 0;
                                });
                                
                                lista = {
                                    artista: nombreArtista,
                                    lista: "Canciones relacionadas con el artista",
                                    canciones: arrayCanciones
                                }
                                res.status(200).send(lista);
                                
                            }
                            else
                            res.status(404).send(JSON.stringify({
                                error: 404,
                                mensaje: "No se ha encontrado ningún canción relacionada con ese artista"
                            }));
                        }
                        else{
                            res.status(500).send(JSON.stringify({
                                error: 500,
                                mensaje: "ERROR DEL SERVIDOR: No se ha podido generar la petición"
                            }));
                        }
                    });
                
            }
            else
            res.status(404).send(JSON.stringify({
                error: 404,
                mensaje: "No se ha encontrado ningún artista con ese nombre"
            }));
        }
        else if(!error){
            res.status(response.statusCode).send(JSON.stringify(errorServer));
        }else{
            res.status(500).send(JSON.stringify({
                error: 500,
                mensaje: "ERROR DEL SERVIDOR: No se ha podido generar la petición"
            }));
        }
        });
            
    }else{
        res.status(400).send(JSON.stringify({
            error: 400,
            mensaje: "No se ha introducido ningún artista"
        }));
    }
    });

    app.listen(port, () => {
    console.log(`API escuchando en: http://localhost:${port}`)
  })