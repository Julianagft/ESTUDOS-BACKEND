// Classes, atributos e metodos
public class Aula01 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        c1.modelo = "CIS Spiro";
        c1.carga = 0.7;
        c1.destampar();
        c1.rabiscar();
        c1.status();

        Caneta c2 = new Caneta();
        c2.modelo = "BIC";
        c2.cor = "Verde";
        c2.tampar();
        c2.rabiscar();
        c2.status();
    }
}

// Aqui eu só posso mexer nos atributos ou métodos que forem públicos. Tudo que for privado ou protegido eu não posso usar;