import express from 'express';
import exphbs from 'express-handlebars';
import sequelize from './db/conn.js';
import User from './models/User.js';

const conn = sequelize;

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    console.log(users)

    res.render('home', { users: users });
});

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    await User.create({ name, occupation, newsletter });

    res.redirect('/');
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id } });

    if (!user) {
        return res.status(404).send('Usuário não encontrado');
    }

    res.render('userview', { user });
});

conn.sync().then(() => {

    app.listen(3000);
    console.log("Banco de dados sincronizado com sucesso, e rodando na porta 3000!");

}).catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
});

// testar em casa com o banco de dados pra ver se ele criou a tabela. 