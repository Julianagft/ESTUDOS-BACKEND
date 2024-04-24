// externo
const minimist = require("minimist"); // O minimist nos ajuda a ler argumentos pela linha de comando; 


// interno
const soma = require('./soma').soma;
const args = minimist(process.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a, b);