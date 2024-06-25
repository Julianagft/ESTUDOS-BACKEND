import express from 'express';
import EmailController from '../controllers/emailController.js';


const router = express.Router();

router.post('/registerEmails', EmailController.registerEmails);

router.get('/getEmails', EmailController.getEmails);

router.post('/sendEmails', EmailController.senEmails);

export default router;