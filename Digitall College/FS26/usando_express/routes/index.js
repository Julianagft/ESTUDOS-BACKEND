// Aqui definimos a subrota e o método;

import express from 'express';


const router = express.Router();

router.get('/', (req, res) => { 
    res.send('Welcome to Homepage');
});

export default router;