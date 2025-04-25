import chalk from 'chalk';
import { deposit } from "../index.js";
import getAccount from "./getAccount.js";
import fs from 'fs'; 

export default function addAmount(accountName, amount) {
    const account = getAccount(accountName);

    if (!amount || isNaN(amount)) { 
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'));
        return deposit();
    }

    account.balance = parseFloat(amount) + parseFloat(account.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(account, null, 2), // 
        'utf-8'
    );

    console.log(chalk.green(`Depósito de R$${amount} realizado com sucesso!`));
}