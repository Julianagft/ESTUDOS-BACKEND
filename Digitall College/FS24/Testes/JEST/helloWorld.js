function helloWorld(arg) {
    const defaultMessage = "Hello World!";

    const errorTest = "Função aceita apenas string como argumento!"

    if (arg === undefined) {
        return  defaultMessage;
    }
        
    if (typeof arg === "string") {
        return "Hello" + arg  + "!"
    } 
    
    if (typeof arg !== "string") {
        return errorTest;
    }

    return defaultMessage;

}

module.exports = helloWorld;