const Cancion = require('./cancion');
class Peticion {
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
        var direccion = "https://api.spotify.com/v1/recommendations?";
        var primervalor=true;
        for (var atributo in cancion) {
            if(cancion[atributo] != null){
                if(primervalor){
                    direccion = direccion.concat("min", atributo, "=",cancion[atributo]);
                    primervalor = false;
                }
                else
                    direccion = direccion.concat("&min", atributo, "=",cancion[atributo]);
            }
            
        }
        
        return direccion;
    }

    crearPeticion(){
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //POR IMPLEMENTAR:
        //Este método creará una peticion para enviar al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
        throw new Error('not Implemented')
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