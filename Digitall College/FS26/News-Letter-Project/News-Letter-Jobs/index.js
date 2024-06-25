import moment from 'moment-timezone';
import cron from 'node-cron';
import { Resend } from "resend";


cron.schedule('43 16 * * *', async () => {
    try {
        const saoPauloTime = moment.tz('America/Sap_Paulo').format('YYY-MM-DD HH:mm:ss');

        // const emails = await getEmails();

        // const emailsAsStrings = emails.map((email) => email.email)

        console.info(`Task running at ${saoPauloTime} São Paulo time`)

        const resend = new Resend(`re_5FeLrc7Y_7j72hfvXojzo77jEYLYDL5QB`);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "juliana.camposrodrigues7@gmail.com",
            subject: "subject",
            html: `<p>E aeww</p>`
        });
        } catch (error) {
            console.log(error)
        }
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});

console.log('Cron job set up to run every day at 12:00 PM São Paulo time.');