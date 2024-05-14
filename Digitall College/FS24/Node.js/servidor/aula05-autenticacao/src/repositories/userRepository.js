//  Responsável por armazenar e gerenciar uma lista de usuários em memória.

class UserRepository {
  constructor() {
    // Configuração do banco de dados JSON
    this.users = [];
  }
  
  create = (user) => {
    if (!user.nome || !user.email || !user.senha) {  
      throw new Error('O usuário deve ter um nome, um email e uma senha.');
    }

    if (user.senha.length < 8 || !/[A-Z]/.test(user.senha)) {
      throw new Error('A senha deve ter no mínimo 8 caracteres e deve conter pelo menos uma letra maiúscula.');
    }
  
    const emailExistente = this.users.some(u => u.email === user.email);
      
    if (emailExistente) {
      throw new Error('O email fornecido já está sendo usado por outro usuário.');
    }
  
    const newUser = { ...user, id: Date.now() }; // Adiciona um ID único ao novo usuário
    this.users.push(newUser);
  };

  listAll = () => {
    try {
      return this.users;
    } catch (error) {
      console.error('Erro ao obter usuários:', error.message);
      throw error;
    }
  };

  findById = (id) => {
    try {
      return this.users.find((usuario) => usuario.id == id);
    } catch (error) {
      console.error('Erro ao obter usuário pelo ID:', error.message);
      throw error;
    }
  };

  updateUser = (id, newData) => {
    const index = this.users.findIndex(usuario => usuario.id === id); 
  
    if (index === -1) {
      throw new Error(`Usuário não encontrado!`)
    }
  
    Object.assign(this.users[index], newData);
  }
  
}

module.exports = UserRepository;