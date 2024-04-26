import express from 'express';
import UserController from '../contollers/userControllers.js';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUsersById); // Os dois pontos é para que o express entenda que é dinamico; 
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);

export default router;