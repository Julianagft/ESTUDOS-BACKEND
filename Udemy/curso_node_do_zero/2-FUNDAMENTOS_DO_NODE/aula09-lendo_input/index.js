 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
 })

 readline.question("Qual a sua linguagem preferida?", (language) => {
    if(language === "Python") {
        console.log("Nunca nem vi -_-");
    } else if(language === "Java") {
        console.log("huuumm, já vi que gosta de escrever linha né");
    } else if (language === "JavaScript") {
        console.log("Esse é dos meus :D")
    } else {
        console.log("escolha interessante....só que não.")
    }

    readline.close();

 })

