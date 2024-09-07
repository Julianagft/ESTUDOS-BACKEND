class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log('Som genérico de animal.');
    }
  }
  
  class Cachorro extends Animal {
    fazerSom() {
      console.log('Au au!');
    }
  }
  
  const meuCachorro = new Cachorro('Tita');
  console.log(meuCachorro.nome); // Saída: Tita
  meuCachorro.fazerSom(); // Saída: Au au!