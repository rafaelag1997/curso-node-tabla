const { crearArchivo,crearArchivo2 } = require('./Helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
  // paquete para trabajar con parametros desde consola

console.clear();
// Version anterior
// const [, , arg3 = '--base=5'] = process.argv;
// const [, base ] = arg3.split('=');

crearArchivo(argv.base,argv.listar,argv.hasta)
 .then(msg => console.log(`Archivo ${msg} creado`.underline.green))
 .catch(error => console.log(error));

