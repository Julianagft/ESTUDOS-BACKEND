// MÓDULO URL

// Serve para decompor uma URL que passamos para o método parse;
// Podemos resgatar: host, path, search, query e etc;
// A partir destas informações podemos alterar a lógica do nosso código;

const url = require("node:url");
const adress = "https://wwww.meusite.com.br/catalogo?produtos=cadeira"
const parsedUrl = url.URL(adress);


console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));