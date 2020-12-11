class Cancion {
    constructor( acousticness, danceability, energy, instrumentalness, liveness, loudness, mode, popularity, speechiness, valence, genre='rock', artista=false) {
      this.target_acousticness = acousticness;
      this.target_danceability = danceability;
      this.target_energy = energy;
      this.target_instrumentalness = instrumentalness;
      this.target_liveness = liveness;
      this.target_loudness = loudness;
      this.target_mode = mode;
      this.target_popularity = popularity;
      this.target_speechiness = speechiness;
      this.target_valence = valence;
      this.seed_genres = genre; 
      this.es_artista = artista;
    }
    
    //Método GET del atributo acousticness
    get acousticness() {
      return this.target_acousticness;
    }

    //Método SET del atributo acousticness
    set acousticness(a) {
      this.target_acousticness = a;
    }
    
    //Método GET del atributo danceability
    get danceability() {
      return this.target_danceability;
    }

    //Método SET del atributo danceability
    set danceability(d){
      this.target_danceability = d;
    }
    
    //Método GET del atributo energy 
    get energy() {
      return this.target_energy;
    }

    //Método SET del atributo energy
    set energy(e){
      this.target_energy = e;
    }
    
    //Método GET del atributo instrumentalness
    get instrumentalness() {
      return this.target_instrumentalness;
    }

    //Método SET del atributo instrumentalness
    set instrumentalness(i){
      this.target_instrumentalness = i;
    }
    
    //Método GET del atributo liveness
    get liveness() {
      return this.target_liveness;
    }

    //Método SET del atributo liveness
    set liveness(li){
      this.target_liveness = li;
    }
    
    //Método GET del atributo loudness
    get loudness() {
      return this.target_loudness;
    }

    //Método SET del atributo loudness
    set loudness(lo){
      this.target_loudness = lo;
    }
    
    //Método GET del atributo mode
    get mode() {
      return this.target_mode;
    }

    //Método SET del atributo mode
    set mode(m){
      this.target_mode = m;
    }
    
    //Método GET del atributo popularity
    get popularity() {
      return this.target_popularity;
    }

    //Método SET del atributo popularity
    set popularity(p){
      this.target_popularity = p;
    }
    
    //Método GET del atributo speechiness
    get speechiness() {
      return this.target_speechiness;
    }

    //Método SET del atributo speechiness
    set speechiness(s){
      this.target_speechiness = s;
    }
    
    //Método GET del atributo valence
    get valence() {
      return this.target_valence;
    }

    //Método SET del atributo valence
    set valence(v){
      this.target_valence = v;
    }

    //Método GET del atributo genre
    get genre() {
      return this.seed_genres;
    }

    //Método SET del atributo acousticness
    set genre(g) {
      this.seed_genres = g;
    }

    get artista() {
      return this.es_artista;
    }

    //Método SET del atributo acousticness
    set artista(a) {
      this.es_artista = a;
    }
  }

module.exports = Cancion;