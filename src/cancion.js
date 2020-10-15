class Cancion {
    constructor( acousticness, danceability, energy, instrumentalness, liveness, loudness, mode, popularity, speechiness, valence) {
      this._acousticness = acousticness;
      this._danceability = danceability;
      this._energy = energy;
      this._instrumentalness = instrumentalness;
      this._liveness = liveness;
      this._loudness = loudness;
      this._mode = mode;
      this._popularity = popularity;
      this._speechiness = speechiness;
      this._valence = valence;
    }
    
    //Método GET del atributo acousticness
    get acousticness() {
      return this._acousticness;
    }

    //Método SET del atributo acousticness
    set acousticness(a) {
      this._acousticness = a;
    }
    
    //Método GET del atributo danceability
    get danceability() {
      return this._danceability;
    }

    //Método SET del atributo danceability
    set danceability(d){
      this._danceability = d;
    }
    
    //Método GET del atributo energy 
    get energy() {
      return this._energy;
    }

    //Método SET del atributo energy
    set energy(e){
      this._energy = e;
    }
    
    //Método GET del atributo instrumentalness
    get instrumentalness() {
      return this._instrumentalness;
    }

    //Método SET del atributo instrumentalness
    set instrumentalness(i){
      this._instrumentalness = i;
    }
    
    //Método GET del atributo liveness
    get liveness() {
      return this._liveness;
    }

    //Método SET del atributo liveness
    set liveness(li){
      this._liveness = li;
    }
    
    //Método GET del atributo loudness
    get loudness() {
      return this._loudness;
    }

    //Método SET del atributo loudness
    set loudness(lo){
      this._loudness = lo;
    }
    
    //Método GET del atributo mode
    get mode() {
      return this._mode;
    }

    //Método SET del atributo mode
    set mode(m){
      this._mode = m;
    }
    
    //Método GET del atributo popularity
    get popularity() {
      return this._popularity;
    }

    //Método SET del atributo popularity
    set popularity(p){
      this._popularity = p;
    }
    
    //Método GET del atributo speechiness
    get speechiness() {
      return this._speechiness;
    }

    //Método SET del atributo speechiness
    set speechiness(s){
      this._speechiness = s;
    }
    
    //Método GET del atributo valence
    get valence() {
      return this._valence;
    }

    //Método SET del atributo valence
    set valence(v){
      this._valence = v;
    }

    crearPeticion(){
      //Parte de "[HU01]: Como usuario, quiero que se me recomiende una playlist según mi estado de ánimo"
      //POR IMPLEMENTAR:
      //Este método creará una petición para enviar al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
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