import express from 'express';
import exphbs from 'express-handlebars';
import sequelize from './db/conn.js';
import Task from './models/Task.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

const conn = sequelize;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());


app.use(express.static('public'));

app.use('/tasks', taskRoutes);

conn.sync().then(() => {

    app.listen(3001);
    console.log("Banco de dados sincronizado com sucesso, e rodando na porta 3001!");

}).catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
});

