// Interage com o repositório de usuários e chama os métodos apropriados do serviço;

  class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }

    create = async (user) => {
      await this.userRepository.create(user);

      return {message:"Usuário cadastrado com sucesso!", user};
    };

    listAll = async () => {
      const users = await this.userRepository.listAll();
      return users;
    };

    findById = (id) => {
      const usuarioEncontrado = this.userRepository.findById(id);

      return usuarioEncontrado;
    };

    updateUser = (id, newData) => {
      const usuarioAtualizado = this.userRepository.updateUser(id, newData);

      return {message: "Usuario atualizado com sucesso!", usuarioAtualizado} ;
    }

    deleteUser = (id) => {
      
      const usuarioDeletado = this.userRepository.deleteUser(id)

      return {message: "Usuário deletado com sucesso!"}
    }

  }

  module.exports = UserService;
