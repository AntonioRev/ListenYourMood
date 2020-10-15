const Cancion = require('../src/cancion');
var cancion_test_2 = new Cancion(null,null, null, null, null, null, null, null, null, null);
var cancion_test_3 = new Cancion(0.1, 0.2, 0.3, 0.4, 0.5, 0.6);
var cancion_test_4 = new Cancion(0.1, 0.2, 0.3, 1.4, 2.5, 1.0, 0.7, 0.8, 0.9, 1);
var cancion_test_5 = new Cancion(-0.1, -0.2, -0.3, -0.4, -0.5, 0.0, 0.7, 0.8, 0.9, 1);

test('Admite null en las variables', () => {
  expect(cancion_test_2.acousticness).toBeNull();
  expect(cancion_test_2.acousticness).toBeDefined();
  expect(cancion_test_2.acousticness).not.toBeUndefined();
  expect(cancion_test_2.acousticness).not.toBeTruthy();
  expect(cancion_test_2.acousticness).toBeFalsy();

  expect(cancion_test_2.danceability).toBeNull();
  expect(cancion_test_2.danceability).toBeDefined();
  expect(cancion_test_2.danceability).not.toBeUndefined();
  expect(cancion_test_2.danceability).not.toBeTruthy();
  expect(cancion_test_2.danceability).toBeFalsy();

  expect(cancion_test_2.energy).toBeNull();
  expect(cancion_test_2.energy).toBeDefined();
  expect(cancion_test_2.energy).not.toBeUndefined();
  expect(cancion_test_2.energy).not.toBeTruthy();
  expect(cancion_test_2.energy).toBeFalsy();

  expect(cancion_test_2.instrumentalness).toBeNull();
  expect(cancion_test_2.instrumentalness).toBeDefined();
  expect(cancion_test_2.instrumentalness).not.toBeUndefined();
  expect(cancion_test_2.instrumentalness).not.toBeTruthy();
  expect(cancion_test_2.instrumentalness).toBeFalsy();

  expect(cancion_test_2.liveness).toBeNull();
  expect(cancion_test_2.liveness).toBeDefined();
  expect(cancion_test_2.liveness).not.toBeUndefined();
  expect(cancion_test_2.liveness).not.toBeTruthy();
  expect(cancion_test_2.liveness).toBeFalsy();

  expect(cancion_test_2.loudness).toBeNull();
  expect(cancion_test_2.loudness).toBeDefined();
  expect(cancion_test_2.loudness).not.toBeUndefined();
  expect(cancion_test_2.loudness).not.toBeTruthy();
  expect(cancion_test_2.loudness).toBeFalsy();

  expect(cancion_test_2.mode).toBeNull();
  expect(cancion_test_2.mode).toBeDefined();
  expect(cancion_test_2.mode).not.toBeUndefined();
  expect(cancion_test_2.mode).not.toBeTruthy();
  expect(cancion_test_2.mode).toBeFalsy();

  expect(cancion_test_2.popularity).toBeNull();
  expect(cancion_test_2.popularity).toBeDefined();
  expect(cancion_test_2.popularity).not.toBeUndefined();
  expect(cancion_test_2.popularity).not.toBeTruthy();
  expect(cancion_test_2.popularity).toBeFalsy();

  expect(cancion_test_2.speechiness).toBeNull();
  expect(cancion_test_2.speechiness).toBeDefined();
  expect(cancion_test_2.speechiness).not.toBeUndefined();
  expect(cancion_test_2.speechiness).not.toBeTruthy();
  expect(cancion_test_2.speechiness).toBeFalsy();

  expect(cancion_test_2.valence).toBeNull();
  expect(cancion_test_2.valence).toBeDefined();
  expect(cancion_test_2.valence).not.toBeUndefined();
  expect(cancion_test_2.valence).not.toBeTruthy();
  expect(cancion_test_2.valence).toBeFalsy();
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
