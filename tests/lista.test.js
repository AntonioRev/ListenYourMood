const request = require('supertest')
const app = require('../api/lista')

app.close();

describe('Peticiones a /generos', () => {
    test('Ver si devuelve 200 y la lista indicada', () => {
        patron = /([a-z]+(\,)?)+/;
        request(app)
        .get("/generos")
        .expect(200)
        .then(response => {
            var respuesta = String(response.body);
            expect(patron.test(respuesta)).toBeTruthy();
      })
    });
});

describe('Peticiones a /genero/:g', () => {
    test('Ver si devuelve 200 con una petición correcta', () => {
        return request(app)
        .get("/genero/rock")
        .expect(200);
    });

    test('Ver si devuelve 404 con una petición correcta (genero no existe)', () => {
        return request(app)
        .get("/genero/altoTema")
        .expect(404);
    });

    test('Ver si devuelve 404 con una petición errónea (parámetros no existen)', () => {
        return request(app)
        .get("/genero/")
        .expect(404);
    });
});

describe('Peticiones a /artista/:nombreArtista/top', () => {
    test('Ver si devuelve 200 con una petición correcta', () => {   
        patron = /\[(\{(\"[a-zA-Z]+\"\:\".+\"(\,)?)+\}(\,)?)+\]/;         
        return request(app)
        .get("/artista/triana/top")
        .expect(200)
        .then(response => {
            var respuesta = JSON.stringify(response.body['Sus 10 canciones más escuchadas']);
            expect(patron.test(respuesta)).toBeTruthy();
      })
    });

    test('Ver si devuelve 404 con una petición correcta (genero no existe)', () => {
        return request(app)
        .get("/artista/JJMerelo/top")
        .expect(404);
    });

    test('Ver si devuelve 404 con una petición errónea (parámetros no existen)', () => {
        return request(app)
        .get("/artista//top")
        .expect(404);
    });
});

describe('Peticiones a /artista/:nombreArtista', () => {
    test('Ver si devuelve 200 con una petición correcta', () => {            
        patron = /\[(\{(\"[a-zA-Z]+\"\:\".+\"(\,)?)+\}(\,)?)+\]/;

        return request(app)
        .get("/artista/thestrokes")
        .expect(200)
        .then(response => {
            var respuesta = JSON.stringify(response.body['canciones']);
            expect(patron.test(respuesta)).toBeTruthy();
        })
    });

    test('Ver si devuelve 404 con una petición correcta (genero no existe)', () => {
        return request(app)
        .get("/artista/JJMerelo")
        .expect(404);
    });

    test('Ver si devuelve 404 con una petición errónea (parámetros no existen)', () => {
        return request(app)
        .get("/artista/")
        .expect(404);
    });
});

