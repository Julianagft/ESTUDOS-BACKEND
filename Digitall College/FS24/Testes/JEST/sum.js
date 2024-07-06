function sum (a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Tipo de dado inválido!"
    }
    return a + b;
}


module.exports = sum;