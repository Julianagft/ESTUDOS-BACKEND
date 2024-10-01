import mongoose, {Document, Schema} from "mongoose";
import { IUser } from "../interface/User"; 


const userSchema:Schema = new Schema({
    nome: String,
    email: String,
    idade: Number,
    cpf: String,
    senha: String,
    cep: String,
});

export const User = mongoose.model<IUser>('Usuario', userSchema);
