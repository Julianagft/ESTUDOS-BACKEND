import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'nome',
        message: "Qual o seu nome?"
    },
    {
        name: 'idade',
        message: "Quantos anos você tem?"
    },
]).then((resposta) => {
    if(!resposta.nome || !resposta.idade) {
        throw new Error("O nome e a idade são obrigatórios!")
    }
    
    console.log(chalk.bgYellow.black(`Seu nome é ${resposta.nome} e você tem ${resposta.idade} anos de idade.`))
}).catch(error => console.error(error));