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
                    'Criar conta',
                    'Consultar saldo',
                    'Depositar',
                    'Sacar',
                    'Transferir',
                    'Sair'
                ]
            }
        ]);

        console.log(chalk.green(`Ação selecionada: ${action}`));
    } catch (err) {
        console.error(chalk.red('Erro ao processar a operação:'), err);
    }
}

operations();