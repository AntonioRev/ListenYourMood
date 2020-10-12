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

    obtenerPeticion() {
	//POR IMPLEMENTAR:
	//Este método realizará una petición al servidor de Spotify con las variables creadas en el constructor y devolverá una lista de reproducción
    }


  }
