const http = require("http");

const server =http.createServer((request, response) => {
    

    response.end("<h1>Hello World</h1>")
});

// Sempre dentro de um modulo http sempre farei uma 'request' e esperarei uma 'response';

server.listen(8080, () => {
    console.log("Estamos rodando na 8080")
});