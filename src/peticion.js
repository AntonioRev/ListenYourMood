const Cancion = require('./cancion');
class Peticion {
    constructor(cancion) {
      this._url = this.crearDireccion(cancion);
      this_peticion = this.crearPeticion()
      this._playlistObtenida = this.obtenerPlaylistSegunEstadoAnimo();
      
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
        direccion = "https://api.spotify.com/v1/recommendations?"
        primervalor=true
        for (var atributo in cancion) {
            if(cancion[atributo] != null){
                if(primervalor){
                    direccion.concat("min", atributo, "=",cancion[atributo]);
                    primervalor=false;
                }
                else
                    direccion.concat("&min", atributo, "=",cancion[atributo]);
            }
            
        }
        
        console.log(direccion);
        return direccion;
    }

    obtenerPlaylistSegunEstadoAnimo() {
        //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
        //POR IMPLEMENTAR:
        //Este método realizará una petición al servidor de Spotify y obtendrá un link a la lista de reproducción deseada
    }

    mostrarPlaylist() {
        //Parte de "[HU02]: Como usuario quiero que se reproduzca música en la aplicación sin tener que irme a spotify"
        //POR IMPLEMENTAR:
        //Este método permitirá ver la playlist recomendada.
    }

    reproducirPlaylist() {
        //Parte de "[HU02]: Como usuario quiero que se reproduzca música en la aplicación sin tener que irme a spotify"
        //POR IMPLEMENTAR:
        //Este método permitirá reproducir la playlist recomendada.
    }

}

module.exports = Cancion;