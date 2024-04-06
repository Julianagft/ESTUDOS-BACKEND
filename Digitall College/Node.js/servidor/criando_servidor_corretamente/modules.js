function trataRequisicao(req, res) {
    switch (req.url) {
        case "/users":
           trataUsers(req, res);
            break;
        case "/products":
            trataProducts(req, res);    
            break;
        case "/clients":
            trataClients(req, res);
            break;
        default:
            res.end("GET request for unknown endpoint");
            break;
    }

}
function trataUsers(req, res) {
    switch (req.method) {
        case "POST":
            res.end("usuário criado com sucesso!");
            break;
        case "PUT":
            res.end("Usuário alterado com sucesso!");
            break;
        default:
            res.end("GET request for unknown endpoint");
            break;
    }

}
function trataProducts(req, res) {
    switch (req.method) {
        case "POST":
            res.end("Produto criado com sucesso!");
            break;
        case "GET":
            res.end("Produtos da lista");
            break;
        case "PUT":
            res.end("Produto alterado com sucesso!");
            break;
        default:
            res.end("GET request for unknown endpoint");
            break;
    }

}
function trataClients(req, res) {
    switch (req.method) {
        case "POST":
            res.end("Cliente criado com sucesso!");
            break;
        case "GET":
            res.end("Clientes da lista");
            break;
        case "PUT":
            res.end("Cliente alterado com sucesso!");
            break;
        case "DELETE":
            res.end("Cliente deletado com sucesso!");
            break;
        default:
            res.end("GET request for unknown endpoint");
            break;
    }

}

module.exports = trataRequisicao;