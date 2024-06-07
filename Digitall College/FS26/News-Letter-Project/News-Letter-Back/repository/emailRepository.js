import {db} from '../config/firebase.js';

export async function insertEmails(name, email) {
    await db.collection('emails').add({
        name: name,
        email: email
    })
}
export async function getEmails() {
    let emails = [];
    let snapShot = await db.collection('emails').get();
    snapShot.forEach(doc => {
        emails.push(doc.data())
    })

    return emails
}