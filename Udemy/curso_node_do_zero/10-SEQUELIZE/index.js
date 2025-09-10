import express from 'express';
import exphbs from 'express-handlebars';
import sequelize from './db/conn.js';
import User from './models/User.js';
import Address from './models/Address.js';


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

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: { id: id } });

    res.redirect('/');
});

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user =  await User.findOne({ include: Address, where: { id: id } });

        res.render('useredit', { user });

    } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
    }

});

app.post('/users/edit', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, { where: { id: id } });

    res.redirect('/');
});

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    console.log(users)

    res.render('home', { users: users });
});

app.post('/adress/create', async (req, res) => {
    const userId = await req.body.userId;
    const street = await req.body.street;
    const number = await req.body.number;
    const city = await req.body.city;

    const adress = {
        userId,
        street,
        number,
        city
    }

    await Address.create({ adress });

    res.redirect(`/users/edit/${userId}`);
});

conn.sync().then(() => {

    app.listen(3001);
    console.log("Banco de dados sincronizado com sucesso, e rodando na porta 3001!");

}).catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
});

