// Lida com as requisições HTTP e a resposta;

  const { request } = require("express");

  class UserController {
    constructor(userService) {
      this.userService = userService;
    }

    create = async (request, response) => {
      const usuario = request.body;

      await this.userService.create(usuario);

      return response.status(200).json(usuario);
    };

    listAll = async (request, response) => {
      return response.json(await this.userService.listAll());
    };

    findById = async (request, response) => {
      const id = request.params.id;

      const usuarioEncontrado = await this.userService.findById(id);

      return response.json(usuarioEncontrado);
    };

    updateUser = (request, response) => {
      const id = request.params.id;
      const newData = request.body;

      console.log({newData})

      const usuarioAtualizado = this.userService.updateUser(id, newData);

      return response.json(usuarioAtualizado); 
    };

    deleteUser = (request, response) => {
      const id = request.params.id;

      this.userService.deleteUser(id); 
      return response.json({ message: "Usuário deletado com sucesso!" });
  
    }

    
  }

  module.exports = UserController;
