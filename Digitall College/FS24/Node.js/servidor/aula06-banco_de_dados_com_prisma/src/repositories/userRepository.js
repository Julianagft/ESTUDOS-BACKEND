const pool = require("../config/db");
const { prisma } = require("../config/prisma");

class UserRepository {

  async checkEmailExistence(email) {
    const query = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email]
    };
    const result = await pool.query(query);
    return result.rows.length > 0;
  }
  
  create = async (user) => {

    if (!user.nome || !user.email || !user.senha) {  
      throw new Error('O usuário deve ter um nome, um email e uma senha.');
    }

    if (user.senha.length < 8 || !/[A-Z]/.test(user.senha)) {
      throw new Error('A senha deve ter no mínimo 8 caracteres e deve conter pelo menos uma letra maiúscula.');
    }
  
    const emailExistente = await this.checkEmailExistence(user.email);
      
    if (emailExistente) {
      throw new Error('O email fornecido já está sendo usado por outro usuário.');
    }

    const resp = await prisma.users.create({
      data: user,
    });
  
    return resp;
  };

  listAll = async () => {

    const resp = await prisma.users.findMany();

    try {
      return resp;

    } catch (error) {
      console.error('Erro ao obter usuários:', error.message);
      throw error;
    }
  };

  findById = async (id) => {

    try {
      const resp = await prisma.users.findUnique({
        where: {
          id: Number(id),
        }
      });

      return resp;

    } catch (error) {
      console.error('Erro ao obter usuário pelo ID:', error.message);
      throw error;
    }
  };

  updateUser = (id, newData) => {
  
    const index = this.users.findIndex(usuario => usuario.id == id);
    
    const newUser = this.users[index] = {
      ...newData
    };
  
    if (index  == -1) {
      throw new Error(`Usuário não encontrado!`)
    } 

    return this.users[index];
        
  };

  deleteUser = (id) => {
    const index = this.users.findIndex(usuario => usuario.id == id);
  

    if (index === -1) {
      throw new Error(`Usuário não encontrado!`);
    }

    this.users.splice(index, 1);

  };

  addChore = (id, chore) => {
     const user = this.findById(id);

     if (!user) {
      throw new Error(`Usuário com o ID ${id} não encontrado!`);
    }

    const chores = [...user.chores];

    chores.push(chore);

     // Atualize o usuário com o novo array de tarefas
    const updatedUser = {
      ...user,
      chores: chores
    } // Atualiza o array de tarefas com o novo array de tarefas

    console.log(updatedUser)
    this.updateUser(id, updatedUser);
    
    return updatedUser
  
  }
 
}

module.exports = UserRepository;