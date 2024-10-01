import express, { ErrorRequestHandler } from "express";
import router from "./route/userRoute";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const port = 3000;
const connection_string = process.env.CONNECTION_STRING || "";

app.use(express.json());
app.use('/users', router);

async function ConnectionDatabase() {
    try {
      await mongoose.connect(
        connection_string 
      );
      console.log("database connection successfully");
      app.listen(port, () => {
        console.log(`server listening on port ${port}`);
      });
    } catch (error) {
      console.log(`failed to connect database ${error}`);
    }
  }

  ConnectionDatabase();