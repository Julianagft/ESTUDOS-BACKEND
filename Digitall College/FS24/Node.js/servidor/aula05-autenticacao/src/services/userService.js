// Interage com o repositório de usuários e chama os métodos apropriados do serviço;

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create = (user) => {
    this.userRepository.create(user);

    return {message:"Usuário cadastrado com sucesso!", user};
  };

  listAll = () => {
    const users = this.userRepository.listAll();
    return users;
  };

  findById = (id) => {
    const usuarioEncontrado = this.userRepository.findById(id);

    return usuarioEncontrado;
  };
}

module.exports = UserService;
