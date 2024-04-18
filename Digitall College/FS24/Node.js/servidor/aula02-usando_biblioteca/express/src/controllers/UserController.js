const UserRepository = require("../repositories/UserRepository");

const userRepository = new UserRepository();

class UserController {

  listUsers = (req, res) => {
    
    return res.json(userRepository.getAllUsers());
  }

  createUser = (req, res) => {
    userRepository.saveUser(req.body);
    return res.send(JSON.stringify({"resp":"Usuário Salvo"}));
  }
}

module.exports = UserController;
