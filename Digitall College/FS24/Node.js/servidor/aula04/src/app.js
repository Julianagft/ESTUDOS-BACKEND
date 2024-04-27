import express from 'express';
import appRouter from './routes/appRoute.js';
import userRouter from './routes/userRoute.js';


const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/", appRouter); // Defino a rota.
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});