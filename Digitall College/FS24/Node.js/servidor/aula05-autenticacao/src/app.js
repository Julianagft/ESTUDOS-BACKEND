const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logMiddleware = require('./middlewares/logMiddleware');
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

// adicionar a camada de servico, (services),
//ex: RN1 - TOdo usuario cadastrado deve ter nome, email, senha
//ex: RN2 - Toda senha precisar ter no minimo 8 carac, e pelo menos uma letra maiscula
//ex: RN3 - O email tem que unico por usuario

// Criar metodos faltando, PUT e DELETE
// PUT deve atualizar um usuario pelo seu id
// DELETE deve deletar pelo seu id

// Gerar de alguma forma, id unicos para cada usuario ao cadastrar
//ex: Vc pode usar sequenciais ou outra forma,
