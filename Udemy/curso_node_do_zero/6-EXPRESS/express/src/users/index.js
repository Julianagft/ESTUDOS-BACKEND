import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, 'templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
});

router.post('/save', (req, res) => {
    console.log(req.body);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário ${id}`);

    res.sendFile(`${basePath}/users.html`);

});

export default router;