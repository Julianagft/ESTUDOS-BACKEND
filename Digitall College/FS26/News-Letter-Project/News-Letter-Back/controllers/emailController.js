import {db} from "../config/firebase.js"

const EmailController = {
    getEmails: async (req, res) => {
        const documentsSnap = db.collection('emails').get()

        const docResult =  [];

        await documentsSnap.then((snapshot) => {
            snapshot.forEach(doc => {
                docResult.push(doc.data());
            })
        })

        res.json(docResult);
        return
    },

    registerEmail: async (req, res) => {
        const { email, nome } = req.body;

        if(!nome || !email) {
            res.json({message: "Preencha todos os campos para prosseguir!"});
            return
        }
        
        await db.collection('emails').add({
            nome,
            email
        }).then(() => {
            res.json({message: "Email e nome cadastrados com sucesso!"});
            return
        })
    }
}

export default EmailController;