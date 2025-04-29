import fs from 'fs';
import chalk from 'chalk';

export default function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Essa conta não existe!'));
        return false; 
    }
    return true; 
}