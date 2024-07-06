const sum  = require("./sum");

test ("Teste 01- Testar se 1 + 1 é igual a 2", () => {
        const result = sum(1, 1);
        expect(result).toBe(2); // To be é só para números
})

test ("Teste 02- Testar se true + 1 é igual a 2", () => {

    expect(sum(true, 1)).toEqual("Tipo de dado inválido!"); // To equal é para objetos e arrays;
    expect(sum(2, false)).toEqual("Tipo de dado inválido!"); 
    expect(sum(true, undefined)).toEqual("Tipo de dado inválido!"); 
})  

