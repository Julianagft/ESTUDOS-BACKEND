//  Responsável por armazenar e gerenciar uma lista de usuários em memória.

const { JsonDB, Config } = require('node-json-db') ;

class UserRepository {
  constructor() {
    // Configuração do banco de dados JSON
    
    this.db = new JsonDB(new Config('users.json', true, false, '/'));
  }
  
  create = (user) => {
    if (!user.nome || !user.email || !user.senha) {  
      throw new Error('O usuário deve ter um nome, um email e uma senha.');
    }

    if (user.senha.length < 8 || !/[A-Z]/.test(user.senha)) {
      throw new Error('A senha deve ter no mínimo 8 caracteres e deve conter pelo menos uma letra maiúscula.');
    }

    const usuarios = this.db.getData('/users') || []; // Obter usuários do banco de dados

    const emailExistente = usuarios.some(u => u.email === user.email);
    if (emailExistente) {
      throw new Error('O email fornecido já está sendo usado por outro usuário.');
    }

    const newUser = { ...user, id: Date.now() }; // Adiciona um ID único ao novo usuário

    usuarios.push(newUser);
    this.db.push('/users', usuarios); // Salva os usuários de volta no banco de dados
  };

  listAll = () => {
    return this.db.getData('/users') || [];
  };

  findById = (id) => {
    const usuarios = this.db.getData('/users') || [];
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id);
    return usuarioEncontrado;
  };
}

module.exports = UserRepository;