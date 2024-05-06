const fs = require('fs');

const arqAntigo = 'arquivo.txt';
const arqNovo = 'novo.txt';

fs.rename(arqAntigo, arqNovo, (err) => {
    if(err) {
        console.error(err, 'Erro ao renomear arquivo!');
        return 
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}.`)
})