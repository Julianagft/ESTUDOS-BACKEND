class UserController  {

    users = [];

    //  Ja criar como Arrow Functions protege o 'this';

    createUser = (req, res) =>  {
        const username = req.body;

        // Verificar se o username já existe:

        const usernameExists = this.users.some(user => user.username === username);
        if(usernameExists) {
            return res.status(400).json({message: "Username already exists!"})
        }

        // Verificar se o username está vazio
        if (!username) {
            return res.status(400).json({ message: "Username are required" });
        }

        const newUser = {id: this.users.length + 1, username};
        this.users.push(newUser);
        res.status(201).json(newUser);
    };
    getUsers = (req, res) => {
        res.json(this.users);
    };
    getUsersById = (req, res) => {
        const userId = parseInt(req.params.id);
        const user = this.users.find(user => user.id === userId); // precisa retornar true ou falso;

        if(user) {
            res.json(user);
        } else {
            res.status(404).json({message: "User not found"});
        }
    };
    deleteUserById = (req, res) => {
        const userId = parseInt(req.params.id);
        const userIndex = this.users.findIndex(user => user.id === userId);

        if(userIndex !== -1) {
            const deleteUser =  this.users.splice(userIndex, 1);
            res.json(deleteUser[0]);
        } else {
            res.status(404).json({message: "User not found!"});
        }
    };
    updateUserById = (req, res) => {
        const userId = parseInt(req.params.id);
        const username =  req.body;
        const userIndex = this.users.findIndex(user => user.id === userId);

        if(userIndex !== -1) {
            users[userIndex].username = username;
            res.json(this.users[userIndex]);
        } else {
            res.status(404).json({message: "User not found!"});
        }
    }
}

export default UserController;