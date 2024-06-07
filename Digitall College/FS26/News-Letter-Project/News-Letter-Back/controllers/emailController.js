import { getEmails, insertEmails } from "../repository/emailRepository.js";
import { Resend } from "resend";

const EmailController = {

    getEmails: async (req, res) => {
        try {
            const resust = await getEmails();
            res.status(200);
            res.json(resust);
            return
        } catch (error) {
            res.status(500);
            res.json({ message: "Erro ao buscar emails" });
            return
        }

    },

    registerEmails: async (req, res) => {
        try {
            const {name, email} = req.body;
            const existentEmails = await getEmails();
            const emailAlreadyExists = existentEmails.find((existendEmail) => existendEmail.email === email)

            if (!name || !email) {
                res.status(400)
                res.json({ message: "Preencha todos os campos para prosseguir!" });
                return
            }

            if (emailAlreadyExists) {
                res.status(400);
                res.json({ message: 'Email já cadastrado!' })
                return
            }

            await insertEmails(name, email);

            res.json({message: "Email inserido com sucesso!"})

        } catch (error) {
            res.status(500);
            console.info(error.message)
            res.json({message: "Erro inesperado", error})
        }
    },

    senEmails: async (req, res) => {
        try {
            const {email, subject, message} = req.body;

            if (!email || !subject || !message) {
                return res.status(400).json({message: "Email, subject and message are required!"});
            }

            const resend = new Resend(`re_5FeLrc7Y_7j72hfvXojzo77jEYLYDL5QB`);

            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: subject,
                html: `<p>${message}</p>`
            });

            res.json({message: "Email enviado com sucesso!"})
        } catch (error) {
            res.status(500);
            res.json({message: 'Erro ao enviar email!'})
            return
        }
        
    }
}

export default EmailController;