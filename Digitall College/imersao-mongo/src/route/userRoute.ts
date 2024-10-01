import {getUsers} from '../controller/userController';
import { Router } from 'express';

const router = Router();

router.get('/', getUsers);

export default router;