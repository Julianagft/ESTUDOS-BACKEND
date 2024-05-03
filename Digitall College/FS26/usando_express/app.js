import express from 'express';
import indexRouter from './routes/index.js'
import userRouter from './routes/userRouter.js'
import logger from './middlewares/logger.js';
import verifyAuthentication from './middlewares/verifyAuthentication.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(verifyAuthentication);
app.use("/", indexRouter); // Aqui definimos a rota;
app.use("/user", userRouter); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})