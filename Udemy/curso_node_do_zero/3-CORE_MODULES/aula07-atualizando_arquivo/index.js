// Unindo 3 módulos do node (http, url e fs);

const http = require('http');
const url = require('url');
const fs = require('fs');


const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;
    
    if(!name) {
        fs.readFile('index.html', (err, data) => {

            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {

        const nameNewLine = name + '\r\n'; //Estou acrescentando a quebra de linha (usando r e n estou garantindo que funcione em qualquer sistema operacional);
        // Adicionei a virgula(,) para separar os arquivos por vírgula alem da quebra. Muito util caso eu estivesse guardando em um array por exemplo. (Não deu certo :/)

        // Trocamos o 'writeFile' para 'appendFile' que garante que o nome seja adicionado e não substituído; 

        fs.appendFile("arquivo.txt", nameNewLine, function(err, data) {
            res.writeHead(302, {
                Location: "/",
            })
            // 302 é o status redirect. Quando o usuário escrever o nome eu vou redirecionar de volta a home. Assim posso escrever o nome quantas vezes eu quiser.
            
            return res.end();
        })
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});