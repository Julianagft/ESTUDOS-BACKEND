// const fs = require("fs");
const { JsonDB, Config } = require('node-json-db');

const db = new JsonDB(new Config("users.json", true, false, "/"))

class UserRepository {
  
  saveUser(user) {
    const userId = Date.now().toString();
    return db.push(`/users/${userId}`, user, true);
  }

  getAllUsers = () => {
    const users = db.getData("/users");
    return Object.values(users); // Retorna um array com os valores dos usuários
  }
}

module.exports = UserRepository;
