const minimist = require("minimist"); // O minimist nos ajuda a ler argumentos pela linha de comando; 

const args = minimist(process.argv.slice(2));

console.log(args);
     
const nome = args['nome'];

console.log(nome);