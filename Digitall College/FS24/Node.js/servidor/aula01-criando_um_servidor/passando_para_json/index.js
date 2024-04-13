const trataRequisicao  = require("./modules")

const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    trataRequisicao(req, res)
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
