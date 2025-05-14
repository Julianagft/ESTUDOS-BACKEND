import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/', (req, res) => {
    const user = {
        name: "Juliana",
        surname: "Campos",
        age: 29,
    };

    const palavra = "Teste";

    const auth = false;

    const approved = true

    res.render('home', { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
    console.log(`Rodando na porta 3000`);
});