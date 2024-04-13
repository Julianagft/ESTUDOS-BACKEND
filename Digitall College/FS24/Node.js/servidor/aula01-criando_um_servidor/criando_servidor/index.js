const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    switch (req.method) {
        case "GET":
            switch (req.url) {
                case "/users":
                    res.end("usuários da lista");
                    break;
                case "/products":
                    res.end("Produtos da lista");
                    break;
                default:
                    res.end("GET request for unknown endpoint");
                    break;
            }
            break;

        case "POST":
            switch (req.url) {
                case "/users":
                    res.end("Usuário criado");
                    break;
                case "/products":
                    res.end("Produto criado");
                    break;
                case "/clients":
                    res.end("Cliente criado");
                    break;
                default:
                    res.end("POST request for unknown endpoint");
                    break;
            }
            break;

        case "PUT":
            switch (req.url) {
                case "/users":
                    res.end("usuário alterado");
                    break;
                case "/products":
                    res.end("Produto alterado")
                    break;
                case "/clients":
                    res.end("usuário alterado")
                    break;
                default:
                    res.end("PUT request for unknown endpoint");
                    break;
            }
            break;

        default:
            res.end("Method not supported");
            break;
    }
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
