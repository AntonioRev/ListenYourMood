# Peticiones a la API

La API contiene una serie de funciones que se ejecutan según la petición que se realice al servidor:
### `/genero/:g`
Esta petición hace que se devuelva una lista de canciones según el género **g** introducido. Se le pueden añadir parámetros musicales que le apetezcan al usuario. Esta petición se relaciona con la [HU03: Poder relacionar la playlist con un género](https://github.com/antoniorev/ListenYourMood/issues/55).

### `/generos`
Esta petición hace que se devuelvan los géneros disponibles en Spotify sobre los que se pueden buscar canciones.  Esta petición se relaciona con la [HU03: Poder relacionar la playlist con un género](https://github.com/antoniorev/ListenYourMood/issues/55).

### `/artista/:nombreArtista/top`
Esta petición hace que se devuelvan las 10 mejores canciones (según Spotify) de un artista **:nombreArtista**.  Esta petición se relaciona con la [HU03: Poder relacionar la playlist con un artista](https://github.com/antoniorev/ListenYourMood/issues/55).

### `/artista/:nombreArtista`
Esta petición hace que se devuelva una lista de canciones relacionadas con el artista **nombreArtista** (las canciones no tienen por que ser del artista, pueden ser de otros artistas con los que comparte género musical). Se le pueden añadir parámetros musicales que le apetezcan al usuario.  Esta petición se relaciona con la [HU03: Poder relacionar la playlist con un artista](https://github.com/antoniorev/ListenYourMood/issues/55).

## Parámetros musicales
Los parámetros musicales permiten ajustar la lista de canciones a según qué nos apetezca escuchar, es decir, si queremos escuchar música más melódica, más bailable, más enérgica, etc. Esta petición se relaciona con la [HU01: Que se me recomiende una playlist según mi estado de ánimo](https://github.com/antoniorev/ListenYourMood/issues/1).

Los parámetros a personalizar son:
- **acousticness**
- **danceability**
- **energy**
- **instrumentalness**
- **liveness**
- **loudness**
- **mode**
- **popularity**
- **speechiness**
- **valence**