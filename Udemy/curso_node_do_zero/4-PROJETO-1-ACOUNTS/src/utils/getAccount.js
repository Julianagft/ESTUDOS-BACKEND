import fs from 'fs';

export default function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r' //Apenas leitura;
    });

    return JSON.parse(accountJSON);
};