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

  }

module.exports = Cancion;