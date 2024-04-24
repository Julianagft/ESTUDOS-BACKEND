import chalk from 'chalk';

const nota = 10;

if(nota >= 7 ) {
    console.log(chalk.green.bold(`Sua nota foi ${nota}. Parabéns você foi aprovado!`))
} else {
    console.log(chalk.red.bold(`Sua nota foi ${nota} e não foi suficiente para aprovação. Você precisa fazer a recuperação!`))
}

console.log(chalk.bgGreen.black("Posso mudar o background color assim e a cor do texto também!"));

console.log(chalk.bgBlue("Outro exemplo!"));

