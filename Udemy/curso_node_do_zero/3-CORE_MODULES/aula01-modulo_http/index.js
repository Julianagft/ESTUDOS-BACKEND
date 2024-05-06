
const url = require("node:url");
const adress = "https://wwww.meusite.com.br/catalogo?produtos=cadeira"
const parsedUrl = new url.URL(adress);


console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));