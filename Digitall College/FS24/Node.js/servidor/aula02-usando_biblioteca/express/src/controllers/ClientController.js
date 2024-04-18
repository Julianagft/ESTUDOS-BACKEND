const ClientRepository = require("../repositories/ClientRepository");

const clientRepository = new ClientRepository();

class ClientController {
  listClient = (req, res) => {
    return res.send("Olá Mundo");
  }

  createClient = (req, res) => {
    clientRepository.saveClient(req.body) 
    return res.send("Cliente Salvo");
  }

}

module.exports = ClientController;
