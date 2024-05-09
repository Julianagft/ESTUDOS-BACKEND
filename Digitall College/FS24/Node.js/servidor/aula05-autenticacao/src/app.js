const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// app.use(logMiddleware);

app.get("/", authMiddleware, (req, resp) => {
  resp.send("Hello World")
})

app.use('/auth', authRoutes)

app.use("/users", authMiddleware, userRoutes);

app.listen(8080, () => {
  console.log("estou rodando na porta 8080!");
});

// adicionar a camada de servico, (services), OK
//ex: RN1 - TOdo usuario cadastrado deve ter nome, email, senha OK
//ex: RN2 - Toda senha precisar ter no minimo 8 carac, e pelo menos uma letra maiscula OK
//ex: RN3 - O email tem que unico por usuario OK

// Criar metodos faltando, PUT e DELETE
// PUT deve atualizar um usuario pelo seu id
// DELETE deve deletar pelo seu id

// Gerar de alguma forma, id unicos para cada usuario ao cadastrar OK
//ex: Vc pode usar sequenciais ou outra forma,

// Separa as responsabilidades de auth (criar controller, services e repository se precisar)

// Definir um tempo de 30 minutos de expiracao para cada token

// Fazer a busca de usuario pelo email no login ser feita pelo usuariosRepository

// criar um crud de tarefas e cada tarefa pertence a um usuario

// autorizacao, apenas um tipo, como ADMIN vai poder mexer com usuarios e
// usuarios comuns vao poder mexer com tarefas
