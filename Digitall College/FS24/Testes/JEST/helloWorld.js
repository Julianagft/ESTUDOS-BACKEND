function helloWorld(arg) {
    if (arg === undefined) {
        return "Hello World" 
    }
        
    if (typeof arg === "string") {
        return "Hello" + arg  + "!"
    } 
    
    if (typeof arg !== "string") {
        return "Função aceita apenas string como argumento!"
    }

}

module.exports = helloWorld;