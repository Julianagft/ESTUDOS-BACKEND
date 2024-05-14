// Lida com as requisições HTTP e a resposta;

  const { request } = require("express");

  class UserController {
    constructor(userService) {
      this.userService = userService;
    }

    create = (request, response) => {
      const usuario = request.body;

      this.userService.create(usuario);

      return response.status(200).json(usuario);
    };

    listAll = (request, response) => {
      return response.json(this.userService.listAll());
    };

    findById = (request, response) => {
      const id = request.params.id;

      const usuarioEncontrado = this.userService.findById(id);

      return response.json(usuarioEncontrado);
    };

    updateUser = (request, response) => {
      const id = request.params.id;
      const newData = request.body;

      console.log({newData})

      const usuarioAtualizado = this.userService.updateUser(id, newData);

      return response.json(usuarioAtualizado); 
    }
  }

  module.exports = UserController;
