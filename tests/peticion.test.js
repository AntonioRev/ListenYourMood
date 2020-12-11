const Cancion = require('../api/cancion');
const Peticion = require('../api/peticion');
var cancion_test_1 = new Cancion(0.1, 0.2, 0.3, 0.4, 0.5, 0.6);
var cancion_test_2 = new Cancion(0.1, 0.2, 0.3, 0.4, 0.5, 1.0, 0.7, 0.8, 0.9, 1);
var cancion_test_3 = new Cancion(3.0, 2, 4, -4);
var peticion_test_1 = new Peticion(cancion_test_1);
var peticion_test_2 = new Peticion(cancion_test_2);
var peticion_test_3 = new Peticion(cancion_test_3);


test('La url es válida', () => {
    expect(peticion_test_1.url.search("https://api.spotify.com/v1/recommendations?")).toBeGreaterThanOrEqual(0);
    peticion_test_1.url = peticion_test_1.url.slice(peticion_test_1.url.search("\\&")+1);
    listaAtributos = peticion_test_1.url.split("&");
    patron = /[a-z]+(_[a-z]+)?=[0-1](\.[0-9])?/;
    for(var a in listaAtributos){
        if(listaAtributos[a] != "seed_genres=rock" && listaAtributos[a] != "es_artista=false")
            expect(patron.test(listaAtributos[a])).toBeTruthy();
        
    }
    

    expect(peticion_test_2.url.search("https://api.spotify.com/v1/recommendations?")).toBeGreaterThanOrEqual(0);
    peticion_test_2.url = peticion_test_2.url.slice(peticion_test_2.url.search("\\&")+1);
    listaAtributos = peticion_test_2.url.split("&");
    patron = /[a-z]+(_[a-z]+)?=[0-1](\.[0-9])?/;
    for(var a in listaAtributos){
        if(listaAtributos[a] != "seed_genres=rock" && listaAtributos[a] != "es_artista=false")
            expect(patron.test(listaAtributos[a])).toBeTruthy();
        
    }
        
    expect(peticion_test_3.url.search("https://api.spotify.com/v1/recommendations?")).toBeGreaterThanOrEqual(0);
    peticion_test_3.url = peticion_test_3.url.slice(peticion_test_3.url.search("\\&")+1);
    listaAtributos = peticion_test_3.url.split("&");
    patron = /[a-z]+(_[a-z]+)?=[0-1](\.[0-9])?/;
    for(var a in listaAtributos){
        if(listaAtributos[a] != "seed_genres=rock" && listaAtributos[a] != "es_artista=false")
            expect(patron.test(listaAtributos[a])).not.toBeTruthy();
    }
});

test('Se espera que devuelva el mismo valor que se le ha definido', () => {
    peticion_test_1.playlistObtenida = "Playlist de prueba";
    expect(peticion_test_1.playlistObtenida).toBe("Playlist de prueba");
});

test('Se espera que en la creación de la peticion de error si los parametros no son correctos', async () => {
    var err;
    try {
        await (() => peticion_test_3.crearPeticion());
      } catch (error) {
        err = error;
        expect(error).toBeInstanceOf(TypeError);
      }
});