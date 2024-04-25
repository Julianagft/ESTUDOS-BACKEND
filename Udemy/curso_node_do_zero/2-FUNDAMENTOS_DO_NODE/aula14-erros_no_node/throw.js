const x = "10";

// checar se x é um número

if(!Number.isInteger(x)) {
    // alem disso ainda valida se é inteiro ou não
    throw new Error("O valor de da variável x não é um número innteiro!")
}

console.log("Continuando o código...");

// O throw irá encerrar o programa!