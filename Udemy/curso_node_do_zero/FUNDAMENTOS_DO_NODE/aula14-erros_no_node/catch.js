const x = 10;

try {
    x = 2;
} catch(err) {
    console.error(`Erro: ${err}`)
}

console.log("Continuando o código...");

// A diferença principal é que ele não encerra o código, ele avisa ao usuario que tem algo errado mas segue com o codigo; 