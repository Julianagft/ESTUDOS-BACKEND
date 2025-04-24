// Módulos Externos
import inquirer from 'inquirer';
import chalk from 'chalk';

// Módulos Internos
import fs from 'fs';

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



operations();