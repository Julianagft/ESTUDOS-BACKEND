import express from 'express';
import TaskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/add', TaskController.createTask);
router.get('/', TaskController.showTasks);

export default router;