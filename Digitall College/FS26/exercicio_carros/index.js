const http = require('http');
const fs = require('fs');

const localhhost = 8000;
const FILE_PATH = "data.json"

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === "/register_enter") {
        handleRegisterRequest(req, res);
    } else if (url === "/register_exit") {
        handleExitRequest(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

function handleRegisterRequest(req, method, res) {
    if (method === "GET") {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Internal Server Error" }));
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });
    } else if (method === "POST") {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if(err) {
                res.writeHead(500, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Internal Server Error"}));
                return;
            }

            let parsedBody = JSON.parse(body)

            if(!parsedBody?.id){
                res.writeHead(400, {'Content-Type': "application/json"});
                res.end(JSON.stringify({message: "Bad Request - id is required"}));
            }

            let items = JSON.parse(data);

            if(items.some(obj => obj.id === body.id)) {
                res.writeHead(400, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Bad Request - id  already exists"}));
                return;
            } // Verifica se existe algum item ja com aquele id antes de enviar a requisição; 

            if (!parsedBody["horario de entrada"] || parsedBody["horario de entrada"].length !== 5) {
                res.writeHead(400, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Bad Request - horario de entrada should have 5 digits"}));
                return;
            }

            items.push(parsedBody);

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


    } else if (method === "PUT") {
        const itemId = url.split('/')[2];
            fs.readFile(FILE_PATH, "utf8", (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                let items = JSON.parse(data);
                const updatedItem = JSON.parse(body);
                items = items.map(item => {
                    if(item.id === Number(itemId)) {
                        return {
                            ...item,
                            ...updatedItem,
                        }
                    }
                    return item;
                    
                })

                fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "application/json"});
                        res.end(JSON.stringify({message: "Internal Server Error"}));
                        return;
                    }

                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "item updated"}));
                    return;
                })
            });
    } else if (method === "DELETE") {
        const itemId = url.split('/')[2];

            if(!itemId) {
                res.writeHead(400);
                res.end("Id do ítem é obrigatório");
            }
            fs.readFile(FILE_PATH, "utf8", (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                let items = JSON.parse(data);
                const updatedItem = JSON.parse(body);
                items = items.filter(item => item.id !== Number(itemId));

                fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "application/json"});
                        res.end(JSON.stringify({message: "Internal Server Error"}));
                        return;
                    }

                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "item deleted"}));
                    return;
                })
            });
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Method Not Allowed" }));
    }
};

function handleExitRequest(req, method, res) {
    if (method === "GET") {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Internal Server Error" }));
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });
    } else if (method === "POST") {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if(err) {
                res.writeHead(500, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Internal Server Error"}));
                return;
            }

            let parsedBody = JSON.parse(body)

            if(!parsedBody?.id){
                res.writeHead(400, {'Content-Type': "application/json"});
                res.end(JSON.stringify({message: "Bad Request - id is required"}));
            }

            let items = JSON.parse(data);

            if(items.some(obj => obj.id === body.id)) {
                res.writeHead(400, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Bad Request - id  already exists"}));
                return;
            } // Verifica se existe algum item ja com aquele id antes de enviar a requisição; 

            if (!parsedBody["horario de entrada"] || parsedBody["horario de entrada"].length !== 5) {
                res.writeHead(400, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Bad Request - horario de entrada should have 5 digits"}));
                return;
            }

            items.push(parsedBody);

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


    } else if (method === "PUT") {
        const itemId = url.split('/')[2];
            fs.readFile(FILE_PATH, "utf8", (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                let items = JSON.parse(data);
                const updatedItem = JSON.parse(body);
                items = items.map(item => {
                    if(item.id === Number(itemId)) {
                        return {
                            ...item,
                            ...updatedItem,
                        }
                    }
                    return item;
                    
                })

                fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "application/json"});
                        res.end(JSON.stringify({message: "Internal Server Error"}));
                        return;
                    }

                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "item updated"}));
                    return;
                })
            });
    } else if (method === "DELETE") {
        const itemId = url.split('/')[2];

            if(!itemId) {
                res.writeHead(400);
                res.end("Id do ítem é obrigatório");
            }
            fs.readFile(FILE_PATH, "utf8", (err, data) => {
                if(err) {
                    res.writeHead(500, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "Internal Server Error"}));
                    return;
                }
                let items = JSON.parse(data);
                const updatedItem = JSON.parse(body);
                items = items.filter(item => item.id !== Number(itemId));

                fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
                    if(err) {
                        console.error(err);
                        res.writeHead(500, {"Content-Type": "application/json"});
                        res.end(JSON.stringify({message: "Internal Server Error"}));
                        return;
                    }

                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({message: "item deleted"}));
                    return;
                })
            });
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Method Not Allowed" }));
    }
};


server.listen(localhhost, () => {
    console.log(`Estou rodando na porta http://localhost:${localhhost}`)
});

