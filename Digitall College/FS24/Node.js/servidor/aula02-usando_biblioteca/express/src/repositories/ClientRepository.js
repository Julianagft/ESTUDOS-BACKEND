// const fs = require("fs");
const { JsonDB, Config } = require('node-json-db');

const db = new JsonDB(new Config("clients.json", true, false, "/"))

class ClientRepository {
  
  saveClient = (client) => {
    const clientId = Date.now().toString();
    return db.push(`/clients/${clientId}`, client, true);
  }
}

module.exports = ClientRepository;
