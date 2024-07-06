const helloWorld  = require("./helloWorld");

test ("Quando função não receber nenhum argumento deve retornar a frase 'Hello World!'", () => {
        const defaultMessage = "Hello World!";
        const result = helloWorld();
        expect(result).toBe(defaultMessage); 
});

test ("Quando a função receber um argumento deve retornar uma frase iniciando com a palavra 'Hello' e terminando com o argumento recebido mais um sinal de exclamação", () => {
        const result = helloWorld("bitches");
        expect(result).toBe("Hello" + "bitches" + "!"); 
});

test ("Nos casos em que o argumento passado não for do tipo texto, a função deve retornar a frase 'Função aceita apenas string como argumento!'", () => {
        const errorMessage = "Função aceita apenas string como argumento!" 
        expect(helloWorld(1)).toBe(errorMessage); 
        expect(helloWorld([])).toBe(errorMessage); 
        expect(helloWorld({})).toBe(errorMessage); 
        expect(helloWorld(null)).toBe(errorMessage); 
        expect(helloWorld(true)).toBe(errorMessage); 
        expect(helloWorld(false)).toBe(errorMessage); 
});

 
