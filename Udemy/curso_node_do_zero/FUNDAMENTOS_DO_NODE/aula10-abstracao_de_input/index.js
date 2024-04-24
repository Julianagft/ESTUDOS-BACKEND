// Interagindo com o input sem a necessidade do front;

const inquirer = require('inquirer');

 inquirer.prompt([
    {
    name: 'p1', message: "Qual a primeira nota?",
    },
    {
        name: 'p2',
        message: "Qual a segunda nota?",
    },
]).then((answers)=> {
    console.log(answers);
    const media = (Number(answers.p1) + Number(answers.p2)) / 2;
    
    console.log(`A média é ${media}`);
}).catch(error => console.error(error))
 
 //Podemos processar e executar as respostas dentro do próprio prompt de comando;



 
 // npm install inquirer@8.1.2