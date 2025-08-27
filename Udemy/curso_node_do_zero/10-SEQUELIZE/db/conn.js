import { Sequelize } from "sequelize";

// Tenho que criar o banco em casa(nodeSequelize2);

// Nome do banco, usuario, senha 

const sequelize = new Sequelize("nodeSequelize2", "postgres", "Lobinho1!", {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

// try {

//     sequelize.authenticate();
//     console.log("Conectamos com sucesso com o Sequelize!")

// } catch (error) {
//     console.error("Erro ao conectar ao banco de dados:", error);
// }

export default sequelize;
