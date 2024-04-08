public class Caneta {
    String modelo;
    String cor;
    float ponta;
    double carga;
    boolean tampada;
    void status() {
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada?  " + this.tampada);
    }

    void rabiscar() {
        if(this.tampada == true) {
            System.out.println("ERRO! Não posso rabiscar se a caneta estiver tampada.");
        } else {
            System.out.println("Estou rabiscando!");
        }
    }

    void tampar() {
        this.tampada = true;
    }

    void destampar() {
        this.tampada = false;
    }
}

// Dentro da classe caneta eu tenho 5 atributos e três métodos;
