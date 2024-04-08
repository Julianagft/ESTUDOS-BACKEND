// CONCEITO DE HERANÇA

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(this.nome + "emite um som");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(this.nome + " latidos")
    }
}

let cachorro = new Cachorro("Tita");
cachorro.falar();