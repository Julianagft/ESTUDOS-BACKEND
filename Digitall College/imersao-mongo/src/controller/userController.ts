import { Request, Response } from "express";
import * as userReposittory from "../repository/userRepository";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userReposittory.findAll();
        res.status(200).send(users);

    } catch (error) {
        res.status(500).send(`Erro: ${error}`);
    }
}