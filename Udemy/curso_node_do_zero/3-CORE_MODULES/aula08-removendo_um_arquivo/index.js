const fs = require('fs');

fs.unlink('arquivo.txt', function(err) {
    if(err) {
        console.error(err, 'Erro na execução do programa!');
        return
    }

    console.log("Arquivo removido com sucesso!");
})

// Quando executado ele exclui o arquivo da pasta. (O arquivo não está mais aí por que ja foi excluido, logo ao executar da o erro 4058, mas se quiser textar cria um arquivo chamado 'arquivo.txt' e executa o código.)