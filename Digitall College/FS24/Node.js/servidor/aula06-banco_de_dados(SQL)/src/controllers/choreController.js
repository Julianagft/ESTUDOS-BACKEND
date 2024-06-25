class ChoreController {
    constructor(choreService) {
        this.choreService = choreService;
      }

      addChore = (request, response) => {
        const id = request.params.id;
        const newChore = request.body
  
        
        return response.json(this.choreService.addChore(id, newChore))
      }
}

module.exports = ChoreController;