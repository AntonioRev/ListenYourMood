const app = require('./lista.js');
var Etcd = require('node-etcd');

let etcd = new Etcd("127.0.0.1:22379");
var puertoetcd;
etcd.get("port", puertoetcd);
const port = puertoetcd || 3000;


app.listen(port, () => {
    console.log(`API escuchando en: http://localhost:${port}`)
})