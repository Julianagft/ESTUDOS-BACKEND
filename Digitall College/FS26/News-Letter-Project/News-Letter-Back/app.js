import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js';
import authRoutes from './routes/authRoutes.js'
import rateLimitMiddleware from './middlewares/rateLimitMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

const PORT = 3001;

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//     // So durante o desenvolvimento para evitar erros de CORS. 
//     // O * quer dizer que qualquer site pode chamar a API, caso eu queira mudar isso é só definir a origem;

//     next();
// })
app.use(cors()); // TEM QUE SER O PRIMEIRO!

app.use(rateLimitMiddleware);
app.use(logMiddleware);
app.use(authMiddleware);

app.use(express.json());

app.use('/emails', emailRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
