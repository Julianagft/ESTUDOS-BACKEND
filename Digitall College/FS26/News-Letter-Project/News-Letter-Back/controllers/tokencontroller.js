import { newToken, validateToken } from "../repository/authRepository.js";
import { v4 as uuidv4 } from 'uuid';


const TokenController = {
    newTokenController: async (req, res) => {

        const uuid = uuidv4();

        try {
            await newToken(uuid);
            res.status(201);
            res.json({
                message: "Token criado com sucesso",
                token: uuid,
            });
            return;
        } catch (error) {
            console.info(error.message)
            res.status(500);
            res.json({message: "Erro ao criar token"});
            return;
        }
    },
    validateTokenController: async  (req, res) => {
        
        try {
            const validToken = await validateToken(password);

            if(!validToken){
                res.status(401);
                res.json({message: "Token inválido"});
                return;
            }

            res.status(200);
            res.json({message: "Token válido"});
            return;
        } catch (error) {
            res.status(500);
            res.json({message: "Erro ao validar token"});
            return;
        }
    },
}

export default TokenController;