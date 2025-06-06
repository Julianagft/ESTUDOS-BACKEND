import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './users/index.js';

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

app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/users', userRoutes);

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

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`);
} )


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




// Aplicação monolito (back e front juntos);

