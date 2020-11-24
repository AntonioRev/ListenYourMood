const Cancion = require('./cancion');
var request = require('request');

class Peticion {
    #id_cliente = 'f6b72ddbdc2f46ec9649a03e6952736e'; // El id de la cuenta que vamos a utilizar para las peticiones
    #num_secreto = '2d98b8dc0df544bb9f774af2f7d50409'; // Numero secreto necesario para autenticación
    
    constructor(cancion) {
      this._url = this.crearDireccion(cancion);
      //this._peticion = this.crearPeticion();
      //this._playlistObtenida = this.obtenerPlaylistSegunEstadoAnimo();
      
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
        var direccion = "https://api.spotify.com/v1/recommendations?seed_genres=rock";
        for (var atributo in cancion) {
            if(cancion[atributo] != null){
                    direccion = direccion.concat("&min", atributo, "=",cancion[atributo]);
            }
            
        }
        
        return direccion;
    }

    crearPeticion(callback){
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //POR IMPLEMENTAR:
        //Este método creará una peticion para enviar al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
        var urlPeticion = this.url;
        var OpcionesAutorizacion = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(this.#id_cliente + ':' + this.#num_secreto).toString('base64'))
            },
            form: {
              grant_type: 'client_credentials'
            },
            json: true
          };
          
          request.post(OpcionesAutorizacion, function(error, response, body) {
            if (!error && response.statusCode === 200) {
          
                var tokenGenerado = body.access_token;
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
                      var result = JSON.stringify(JSON.parse(body2));
                      return callback(null, result);
                  
                    }
                    else{
                        return callback(error, null);
                      
                    }
                  });
            }
            else{
                var falloToken = "Error al obtener el token";
                if(error)
                    falloToken = falloToken + "\nError:" + error;
                if(response != null){
                    falloToken = falloToken + "\nCodigo de error:"+response.statusCode;
                    falloToken = falloToken + "\nExplicacion:"+response.statusMessage;
                    }
            throw new Error(falloToken);
            }
          });

        
    }

    obtenerPlaylistSegunEstadoAnimo() {
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //POR IMPLEMENTAR:
        //Este método realizará una petición al servidor de Spotify y obtendrá un link a la lista de reproducción deseada
        throw new Error('not Implemented')
    }

    mostrarPlaylist() {
        //Parte de "[HU02]: Como usuario quiero que se reproduzca música en la aplicación sin tener que irme a spotify"
        //POR IMPLEMENTAR:
        //Este método permitirá ver la playlist recomendada.
        throw new Error('not Implemented')
    }

    reproducirPlaylist() {
        //Parte de "[HU02]: Como usuario quiero que se reproduzca música en la aplicación sin tener que irme a spotify"
        //POR IMPLEMENTAR:
        //Este método permitirá reproducir la playlist recomendada.
        throw new Error('not Implemented')
    }

}


module.exports = Peticion;