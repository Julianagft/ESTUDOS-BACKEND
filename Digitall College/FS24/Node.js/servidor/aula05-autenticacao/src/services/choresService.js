class ChoreService {
    constructor(userRepository) {
        this.userRepository = userRepository;
      }

    addChore = (id, chore) => {
        console.log(chore)
  
        this.userRepository.addChore(id, chore);
  
        return {message: "Tarefa adicionada com sucesso!", chore} ;
      }
}

module.exports = ChoreService;