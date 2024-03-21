// CONCEITO DE MODULARIZAÇÃO 

const add = require('./add');
const subtract = require('./subtract');

const resultAdd = add(4, 8);
const resultSubtract = subtract( 8, 3);

console.log("Adição:", resultAdd);
console.log("Subtração:", resultSubtract);

// TIPOS DE MÓDULO:

// CORE MODULES:

// Módulos que vem integrados com o Node.js

// EX: módulo 'fs': Fornece métodos para interagir com o sistema de arquivos do sistema operacional;

// Podem ser acessados diretamente, sem a necessidade da utilização da função 'require()';

// MÓDULOS CRIADOS PELO USUÁRIO:

// São aqueles que densevolvemos para atender às necessidades específicas de nossos aplicativos;

// Para criar um módulo personalizado em Node.js usamos a instrução 'module.exports'

// Ao usar módulos criados pelo usuário, precisamos usar a função require() para importar esses módulos em nossos scripts e acessar suas funcionalidades.

// MÓDULOS DE TERCEIROS:

// Os módulos de terceiros são pacotes ou bibliotecas desenvolvidos por outras pessoas ou organizações que disponibilizam funcionalidades adicionais para o Node.js.

// Esses módulos podem ser instalados facilmente usando o npm (Node Package Manager) e são incluídos em nossos projetos usando a função require(). Por exemplo, o pacote axios é uma biblioteca popular para fazer requisições HTTP em Node.js: