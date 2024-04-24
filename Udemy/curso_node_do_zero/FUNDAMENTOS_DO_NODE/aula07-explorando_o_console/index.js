// Mais de um valor:

const x = 10;
const y = 'Juliana';
const z = [1,2];

console.log(x, y, ...z);

// Contagem de impressões:

console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// Variável entre string: 

console.log("%s", y); // "%s" para indicar que é uma string e imprime o dado depois;
console.log(`O nome dela é %s, e ela é programadora`, y); // Acho meio idiota kkkkkk

// Limpar o console:

 setTimeout(()=> {
    console.clear()
 }, 5000); // vai limpar o console automaticamente depois de 5 segundos (esse eu achei útil :D);