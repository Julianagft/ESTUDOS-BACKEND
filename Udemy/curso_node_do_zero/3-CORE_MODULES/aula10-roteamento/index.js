const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    let fileName = q.pathname.substring(1); 
    
    // Se o fileName estiver vazio, carregue o arquivo 'index.html'
    if (fileName === '') {
        fileName = 'index.html';
    }

    const filePath = path.join(__dirname, fileName); 

    if (fileName.includes('html')) {
        if (fs.existsSync(filePath)) {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    return res.end('Erro interno do servidor');
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    return res.end('Erro interno do servidor');
                }
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data)
                console.error(err);
                return res.end();
            })
        }
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});