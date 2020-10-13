class Cancion {
    constructor( acousticness, danceability, energy, instrumentalness, liveness, loudness, mode, popularity, speechiness, valence) {
      this.acousticness = acousticness;
      this.danceability = danceability;
      this.energy = energy;
      this.instrumentalness = instrumentalness;
      this.liveness = liveness;
      this.loudness = loudness;
      this.mode = mode;
      this.popularity = popularity;
      this.speechiness = speechiness;
      this.valence = valence;
    }
    
    //Método GET del atributo acousticness
    get acousticness() {
      return this.acousticness;
    }

    //Método SET del atributo acousticness
    set acousticness(a){
      this.acousticness = a;
    }
    
    //Método GET del atributo danceability
    get danceability() {
      return this.danceability;
    }

    //Método SET del atributo danceability
    set danceability(d){
      this.danceability = d;
    }
    
    //Método GET del atributo energy 
    get energy() {
      return this.energy;
    }

    //Método SET del atributo energy
    set energy(e){
      this.energy = e;
    }
    
    //Método GET del atributo instrumentalness
    get instrumentalness() {
      return this.instrumentalness;
    }

    //Método SET del atributo instrumentalness
    set instrumentalness(i){
      this.instrumentalness = i;
    }
    
    //Método GET del atributo liveness
    get liveness() {
      return this.liveness;
    }

    //Método SET del atributo liveness
    set liveness(li){
      this.liveness = li;
    }
    
    //Método GET del atributo loudness
    get loudness() {
      return this.loudness;
    }

    //Método SET del atributo loudness
    set loudness(lo){
      this.loudness = lo;
    }
    
    //Método GET del atributo mode
    get mode() {
      return this.mode;
    }

    //Método SET del atributo mode
    set mode(m){
      this.mode = m;
    }
    
    //Método GET del atributo popularity
    get popularity() {
      return this.popularity;
    }

    //Método SET del atributo popularity
    set popularity(p){
      this.popularity = p;
    }
    
    //Método GET del atributo speechiness
    get speechiness() {
      return this.speechiness;
    }

    //Método SET del atributo speechiness
    set speechiness(s){
      this.speechiness = s;
    }
    
    //Método GET del atributo valence
    get valence() {
      return this.valence;
    }

    //Método SET del atributo valence
    set valence(v){
      this.valence = v;
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
