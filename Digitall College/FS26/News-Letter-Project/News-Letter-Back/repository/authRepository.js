import {db} from '../config/firebase.js';

export default async function authRepository(token) {
    const tokens = await db.collection('tokens').get();

    const tokensData = tokens.docs.map((doc) => doc.data()); // transformando ele em um array de objetos;

    const validToken = tokensData.find((tokenData) => tokenData.token === token);

    return validToken;

}