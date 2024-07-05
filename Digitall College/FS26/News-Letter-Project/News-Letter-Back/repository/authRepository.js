import {db} from '../config/firebase.js';
import { stringToHash } from '../utils/hash.js'

export async function newToken(str){
    const hashedToken = stringToHash(str)

    const now24HoursLater = new Date()
    now24HoursLater.setHours(now24HoursLater.getHours() + 24)

    await db.collection('tokens').add({
        token: (await hashedToken).toString(),
        expirationDate: now24HoursLater
    })  
}

export async function validateToken(str){
    const hashedToken = stringToHash(str)

    const tokens = await db.collection('tokens').get()

    const tokensData = tokens.docs.map((doc) => doc.data())

    const validToken = tokensData.find(async (tokenData) => tokenData.token === (await hashedToken).toString())

    if(validToken){
        const now = new Date()

        if(now > validToken.expirationDate.toDate()){
            return false
        }
    }

    return validToken
}
