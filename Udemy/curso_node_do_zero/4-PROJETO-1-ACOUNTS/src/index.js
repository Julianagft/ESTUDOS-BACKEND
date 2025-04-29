// Módulos Externos
import inquirer from 'inquirer';
import chalk from 'chalk';

// Módulos Internos
import fs from 'fs';

import addAmount from './utils/addAmount.js';
import checkAccount from './utils/checkAccount.js';
import subtractAmount from './utils/subtractAmount.js';

async function operations() {
    try {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: [
                    'Criar Conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Transferir',
                    'Sair'
                ]
            }
        ]);

        console.log(chalk.green(`Ação selecionada: ${action}`));

        if (action === 'Criar Conta') {
            createAccount();
        } else if(action === 'Depositar') {
            deposit();

        } else if (action === 'Consultar Saldo') {
            getAcountBalance();
        } else if(action === 'Sacar') {
            withdraw();

        } else if(action === 'Transferir') {

        } else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
            process.exit();
        }
    } catch (err) {
        console.error(chalk.red('Erro ao processar a operação:'), err);
    }
}

async function createAccount() {
    try {   
        console.log(chalk.green('Defina as opções da sua conta a seguir'));
    
        const { accountName } = await inquirer.prompt([
            {
                name: 'accountName',
                message:'Digite um nome para sua conta:',
            }
        ]);

        console.info(accountName);

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Essa conta já existe!'));
            createAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify({ balance: 0, transactions: [] }, null, 2),
            'utf-8'
        );

        console.log(chalk.bgGreen.black('Parabéns, sua conta foi criada com sucesso! Obrigada por escolher o nosso banco!'));

        operations();

    } catch (err) {
        console.error(chalk.red('Erro ao criar conta:'), err);
    }
}

export async function deposit() {
    try {
        const { accountName } = await inquirer.prompt([
            {
                name: 'accountName',
                message:'Qual o nome da sua conta?'
            },
        ])

        if (!checkAccount(accountName)) {
            return operations(); 
        }

        const { amount } = await inquirer.prompt([
            {
                name: 'amount',
                message:'Qual o valor que você deseja depositar?',
                validate(value) {
                    if (isNaN(value)) {
                        return 'Por favor, digite um número.';
                    }
                    return true;
                }
            },
        ])
        
        addAmount(accountName, Number(amount));
        operations();
         
    } catch (err) {
        console.error(chalk.red('Erro ao depositar:'), err);
    }
    
}

export async function getAcountBalance() {
    try {
        const { accountName } = await inquirer.prompt([
            {
                name: 'accountName',
                message:'Qual o nome da sua conta?'
            },
        ])

        if (!checkAccount(accountName)) {
            return getAcountBalance(); 
        }

        const accountData = JSON.parse(fs.readFileSync(`accounts/${accountName}.json`, 'utf-8'));
        console.log(chalk.green(`Seu saldo é: ${accountData.balance}`));
        
    } catch (err) {
        console.error(chalk.red('Erro ao consultar saldo:'), err);
        
    }
}

export async function withdraw() {
    try {
        const { accountName } = await inquirer.prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ])

        if (!checkAccount(accountName)) {
            return withdraw(); 
        }

        const accountData = JSON.parse(fs.readFileSync(`accounts/${accountName}.json`, 'utf-8'));

        const { amount } = await inquirer.prompt([
            {
                name: 'amount',
                message: 'Qual o valor que você deseja sacar?',
                validate(value) {
                    if (isNaN(value)) {
                        return 'Por favor, digite um número.';
                    }
                    return true;
                }
            },
        ]);   

        subtractAmount(accountName, Number(amount));

        operations();

    } catch (err) {
        console.error(chalk.red('Erro ao sacar:'), err);
    }
}


operations();