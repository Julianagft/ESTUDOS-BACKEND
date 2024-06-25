import {db} from "../config/firebase.js"
import dbPostgres from "../config/postgres.js"

const EmailController = {
    getEmails: async (req, res) => {
        try{
            const result = await dbPostgres.query('SELECT * FROM emails', (err, result) => {
                res.json(result.rows)
                return
            })
        } catch(error) {
            res.status(400).json({message: "Erro ao buscar email!", error})
            return
        }
        
    },

    registerEmail: async (req, res) => {
        const {name, email} = req.body;

       if(!name || !email) {
        res.status(400).json({message: 'Preencha todos os campos!'})
        return
       }

       try {
        await dbPostgres.query('INSERT INTO emails (name, email) VALUES ($1, $2)', [name, email])

        res.status(201).json({message: 'Email cadastrado com sucesso!'})
        return
       } catch (error) {
        res.status(500).json({message: 'Erro ao cadastrar email!'})
       }
    }
}

export default EmailController;