const Cancion = require('../src/cancion');
var cancion_test_2 = new Cancion(null, null, null, null, null, null, null, null, null, null);
var cancion_test_3 = new Cancion(0.1, 0.2, 0.3, 0.4, 0.5, 0.6);
var cancion_test_4 = new Cancion(0.1, 0.2, 0.3, 1.4, 2.5, 1.0, 0.7, 0.8, 0.9, 1);
var cancion_test_5 = new Cancion(-0.1, -0.2, -0.3, -0.4, -0.5, 0.0, 0.7, 0.8, 0.9, 1);
var cancion_test_6 = new Cancion(null, null, null, null, null, 0.4, null, null, null, null);

test('Admite null en las variables', () => {
  for (var atributo in cancion_test_2) {
    expect(cancion_test_2[atributo]).toBeNull();
    expect(cancion_test_2[atributo]).toBeDefined();
    expect(cancion_test_2[atributo]).not.toBeUndefined();
    expect(cancion_test_2[atributo]).not.toBeTruthy();
    expect(cancion_test_2[atributo]).toBeFalsy();
  }
});

test('Los valores pueden no estar definidos', () => {
    expect(cancion_test_3.mode).toBeUndefined();
  
    expect(cancion_test_3.popularity).toBeUndefined();
    
    expect(cancion_test_3.speechiness).toBeUndefined();
  
    expect(cancion_test_3.valence).toBeUndefined();
  });

test('No deben ser mayores que 1', () => {
    expect(cancion_test_4.instrumentalness).not.toBeLessThanOrEqual(1);
  
    expect(cancion_test_4.liveness).not.toBeLessThanOrEqual(1);

    expect(cancion_test_4.loudness).toBeLessThanOrEqual(1);
  });
  
test('No deben ser negativos', () => {
    expect(cancion_test_5.acousticness).not.toBeGreaterThanOrEqual(0);
  
    expect(cancion_test_5.danceability).not.toBeGreaterThanOrEqual(0);
  
    expect(cancion_test_5.energy).not.toBeGreaterThanOrEqual(0);
  
    expect(cancion_test_5.instrumentalness).not.toBeGreaterThanOrEqual(0);
  
    expect(cancion_test_5.liveness).not.toBeGreaterThanOrEqual(0);

    expect(cancion_test_5.loudness).toBeGreaterThanOrEqual(0);
});

test('Debe haber al menos un atributo introducido', () => {
  vacio = false;
  for (var atributo in cancion_test_6) {
    if(cancion_test_6[atributo] != null)
      vacio=true;
  }
  expect(vacio).toBeTruthy();

  vacio = false;
  for (var atributo in cancion_test_2) {
    if(cancion_test_2[atributo] != null)
      vacio=true;
  }
  expect(vacio).toBeFalsy();
});