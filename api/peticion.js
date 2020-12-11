const Cancion = require('./cancion');
var request = require('request');

class Peticion {
    
    constructor(cancion) {
      this._url = this.crearDireccion(cancion);      
    }
    
    //Método GET del atributo url
    get url() {
        return this._url;
    }
  
    //Método SET del atributo url
    set url(u){
        this._url = u;
    }

    //Método GET del atributo token
    get token() {
        return this._token;
    }

    //Método SET del atributo token
    set token(t){
        this._token = t;
    }
    //Método GET del atributo playlist
    get playlistObtenida() {
        return this._playlistObtenida;
    }
  
    //Método SET del atributo playlist
    set playlistObtenida(p){
        this._playlistObtenida = p;
    }

    crearDireccion(cancion){
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //Este método creará una dirección para enviar al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
        if(cancion.es_artista)
            var direccion = "https://api.spotify.com/v1/recommendations?seed_artists="+cancion.genre;
        else
            var direccion = "https://api.spotify.com/v1/recommendations?seed_genres="+cancion.genre;
        for (var atributo in cancion) {
            if(cancion[atributo] != null){
                    direccion = direccion.concat("&", atributo, "=",cancion[atributo]);
            }
            
        }
        
        return direccion;
    }

    crearPeticion(callback){
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //Este método creará una peticion para enviar al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
        var urlPeticion = this.url;

    
        var tokenGenerado = this.token;
        var peticion = {
            url: urlPeticion,
            headers: {
                'Authorization': 'Bearer ' + tokenGenerado,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            json: true
            };
            
            request.get(peticion, function(error2, response2, body2) {
            if (!error2 && response2.statusCode === 200) {
                return callback(null, body2);
            
            }
            else if(!error2){
                return callback(response2.statusCode, null);
            }else{
                return callback(error2, null);
            }
            });
            

        
    }

}



module.exports = Peticion;