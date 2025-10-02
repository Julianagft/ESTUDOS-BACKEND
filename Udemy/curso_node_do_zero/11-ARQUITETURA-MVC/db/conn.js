import { Sequelize } from "sequelize";


const sequelize = new Sequelize("nodeSequelize2", "postgres", "Lobinho1!", {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

try {
    sequelize.authenticate();
    console.log("Conectamos com sucesso com o sql!")
} catch (error) {
  console.error("Erro ao conectar ao banco de dados:", error);
}


export default sequelize;
