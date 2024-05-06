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
        fs.writeFile("arquivo.txt", name, function(err, data) {
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