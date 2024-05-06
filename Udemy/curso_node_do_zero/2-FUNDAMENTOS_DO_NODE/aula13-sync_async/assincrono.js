    const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo.txt', 'oi', function(err) {
    setTimeout(function() {
        console.log("Arquivo criado!");
    },1000) // Minha função demorará 1s para ser executada.
}); // esse será assíncrono. Sabemos disso por quen não temos o 'Sync'.
console.log("fim");

//Aqui o "fim" será executado ANTES da execução total do arquivo;
// Ele irá executar o código síncrono enquanto o assíncrono roda em paralelo. Isso é importante pois faz com que o código não espere nem dependa do outro para rodar.