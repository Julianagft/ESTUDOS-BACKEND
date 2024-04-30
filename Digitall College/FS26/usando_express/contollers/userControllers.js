let users = [];

const UserController = {
    createUser: (req, res) => {
        const {username, email} = req.body;

        // Verifica se o email já existe:
        const emailExists = users.some(user => user.email === email);
        if(emailExists) {
            return res.status(400).json({message: "Email already exists!"})
        }

        // Verificar se o username já existe:

        const usernameExists = users.some(user => user.username === username);
        if(usernameExists) {
            return res.status(400).json({message: "Username already exists!"})
        }

        // Verificar se o username e o email estão vazios
        if (!username || !email) {
            return res.status(400).json({ message: "Username and email are required" });
        }

        const newUser = {id: users.length + 1, username, email};
        users.push(newUser);
        res.status(201).json(newUser);
    },
    getUsers: (req, res) => {
        res.json(users);
    },
    getUsersById: (req, res) => {
        const userId = parseInt(req.params.id);
        const user = users.find(user => user.id === userId);

        if(user) {
            res.json(user);
        } else {
            res.status(404).json({message: "User not found"});
        }
    },
    deleteUserById: (req, res) => {
        const userId = parseInt(req.params.id);
        const userIndex = users.findIndex(user => user.id === userId);

        if(userIndex !== -1) {
            const deleteUser =  users.splice(userIndex, 1);
            res.json(deleteUser[0]);
        } else {
            res.status(404).json({message: "User not found!"});
        }
    },
    updateUserById: (req, res) => {
        const userId = parseInt(req.params.id);
        const {username, email} =  req.body;
        const userIndex = users.findIndex(user => user.id === userId);

        if(userIndex !== -1) {
            users[userIndex].username = username;
            users[userIndex].email = email;
            res.json(users[userIndex]);
            res.json(users[userIndex]);
        } else {
            res.status(404).json({message: "User not found!"});
        }
    }
}

export default UserController;