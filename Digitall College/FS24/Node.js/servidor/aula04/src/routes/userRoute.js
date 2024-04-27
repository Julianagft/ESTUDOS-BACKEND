import express from 'express';
import UserController from '../controller/userController.js';

const router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUsersById); // Os dois pontos é para que o express entenda que é dinamico; 
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);


export default router;