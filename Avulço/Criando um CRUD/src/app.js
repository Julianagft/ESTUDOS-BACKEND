import express from 'express';
import UserController from './controller/UserController';

const app = express();
const userController = new UserController();

app.use('/user', userController); // Para criarmos uma rota para chamar o controller;
  

app.listen(3000, () => {
    console.log('server running on port 8080')
})