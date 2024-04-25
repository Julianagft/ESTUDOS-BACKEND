const fs = require('fs');

console.log('inicio');

fs.writeFileSync('arquivo.txt', 'oi'); // esse será sincrono. Sabemos disso por conta do 'Sync';
console.log("fim");