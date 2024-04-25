// Aprendendo a utilizar um módulos;

const fs = require('fs') // file system;

fs.readFile("arquivo.txt", "utf8", (err, data) => {
    if(err) {
        console.error(err);
        return
    }

    console.log(data);
})