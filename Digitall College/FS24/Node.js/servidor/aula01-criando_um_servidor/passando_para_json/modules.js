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
            res.end(JSON.stringify({"retorno": "GET request for unknown endpoint"}));
            break;
    }

}
function trataUsers(req, res) { 
    switch (req.method) {
        case "POST":
            res.end(JSON.stringify({"retorno":"usuário criado com sucesso!" }));
            break;
        case "PUT":
            res.end(JSON.stringify({"retorno": "Usuário alterado com sucesso!"}));
            break;
        default:
            res.end(JSON.stringify({"retorno": "GET request for unknown endpoint"}));
            break;
    }

}
function trataProducts(req, res) {
    switch (req.method) {
        case "POST":
            res.end(JSON.stringify({"retorno": "Produto criado com sucesso!"}));
            break;
        case "GET":
            res.end(JSON.stringify({"retorno": "Produtos da lista"}));
            break;
        case "PUT":
            res.end(JSON.stringify({"retorno": "Produto alterado com sucesso!"}));
            break;
        default:
            res.end(JSON.stringify({"retorno": "GET request for unknown endpoint"}));
            break;
    }

}
function trataClients(req, res) {
    switch (req.method) {
        case "POST":
            res.end(JSON.stringify({"retorno": "Cliente criado com sucesso!"}));
            break;
        case "GET":
            res.end(JSON.stringify({"retorno": "Clientes da lista"}));
            break;
        case "PUT":
            res.end(JSON.stringify({"retorno": "Cliente alterado com sucesso!"}));
            break;
        case "DELETE":
            res.end(JSON.stringify({"retorno": "Cliente deletado com sucesso!"}));
            break;
        default:
            res.end(JSON.stringify({"retorno": "GET request for unknown endpoint"}));
            break;
    }

}

module.exports = trataRequisicao;