const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const choresRoutes = require("./routes/choresRoutes");
const app = express();



app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Hello World")
})

app.use('/auth', authRoutes)

app.use("/users", authMiddleware, userRoutes);

app.use('/chores', choresRoutes)

app.listen(8080, () => {
  console.log("estou rodando na porta 8080!");
});





// Definir um tempo de 30 minutos de expiracao para cada token

// Fazer a busca de usuario pelo email no login ser feita pelo usuariosRepository

// criar um crud de tarefas e cada tarefa pertence a um usuario

// autorizacao, apenas um tipo, como ADMIN vai poder mexer com usuarios e
// usuarios comuns vao poder mexer com tarefas


