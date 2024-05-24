import express from 'express';
import EmailController from '../controllers/emailController.js';


const router = express.Router();

router.post('/sendEmails', EmailController.registerEmail);

router.get('/getEmails', EmailController.getEmails);

export default router;