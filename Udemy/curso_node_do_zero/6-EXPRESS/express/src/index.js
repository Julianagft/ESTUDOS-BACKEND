import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

const basePath = path.join(__dirname, 'templates');

// const checkAuth = function(req, res, next) {
//     req.authStatus = true;

//     if(req.authStatus) {
//         console.log('Está logado, pode continuar');
//         next();
//     } else {
//         console.log('Não está logado, faça o login para continuar');
//         next();
//     }
// }

// app.use(checkAuth);

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
});

app.post('/users/save', (req, res) => {
    console.log(req.body);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário ${id}`);

    res.sendFile(`${basePath}/users.html`);

});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




// Aplicação monolito (back e front juntos);

