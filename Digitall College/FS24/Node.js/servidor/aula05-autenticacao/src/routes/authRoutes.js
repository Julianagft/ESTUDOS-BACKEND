    const express = require("express");
    const jwt = require("jsonwebtoken");

    const authRoutes = express.Router();

    const unicoUsuario = {
        email: "juliana@email.com",
        senha: "juliana123"
    }

    authRoutes.post("/login", (req, res) => {

        const usuario = req.body;
        if(!usuario.email || !usuario.senha) {
        return res.sendStatus(400);
        }

        if(
            usuario.email === unicoUsuario.email &&
            usuario.senha === unicoUsuario.senha
        ) {
            const payload = {email: "juliana@email.com"};
            const chaveSecreta = "juliana123";

            const token = jwt.sign(payload, chaveSecreta) // jwt.sign(payload, secretOrPrivateKey, [options, callback])

            return res.send({
                user: null,
                auth: token
            })    
            }

        res.status(400).json({
            error: "Email ou senha incorretos."
        })
    });


    module.exports = authRoutes;



