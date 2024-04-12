const http = require('http');
const fs = require('fs');

const localhhost = 3000;
const FILE_PATH = "data.json"

const server = http.createServer((req, res) => {
    const {method, url, headers} = req;

    let body = [];

    req.on("data", (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString(); // Buffer é responsável pela formatação do body;

        if(method === "GET" && url === "/items") {
            fs.readFile(FILE_PATH, 'utf8', (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                
                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(data);
            });
        } else if(method === "POST" && url === "/items") {
            fs.readFile(FILE_PATH, 'utf8', (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                
                let items = JSON.parse(data);
                items.push(JSON.parse(body));

                fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
                    if(err) {
                        res.writeHead(500, {"Content-Type": "application/json"});
                        res.end(JSON.stringify({message: "Internal Server Error"}));
                        return;
                    }

                    res.writeHead(201, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "item created"}));
                    return;
                })
            });

        }
    })
});

server.listen(localhhost, () => {
    console.log(`Estou rodando na porta http://localhost:${localhhost}`)
})

// O código de resposta de sucesso sempre será 200;
// Mesmo que o cliente não receba a resposta mas o processo da API não para; 