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

    try {
      // Obter usuários do banco de dados
      let usuarios = this.db.getData('/users');
      
      // Garantir que os usuários sejam tratados como um array
      if (!Array.isArray(usuarios)) {
        usuarios = [];
      }
  
      const emailExistente = usuarios.some(u => u.email === user.email);
      if (emailExistente) {
        throw new Error('O email fornecido já está sendo usado por outro usuário.');
      }
  
      const newUser = { ...user, id: Date.now() }; // Adiciona um ID único ao novo usuário
      usuarios.push(newUser);
      this.db.push('/users', usuarios); // Salva os usuários de volta no banco de dados
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
      throw error;
    }

  };
}

module.exports = UserRepository;