import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js';

const app = express();

const PORT = 3001;

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//     // So durante o desenvolvimento para evitar erros de CORS. 
//     // O * quer dizer que qualquer site pode chamar a API, caso eu queira mudar isso é só definir a origem;

//     next();
// })

app.use(express.json());

app.use(cors());

app.use('/email', emailRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
