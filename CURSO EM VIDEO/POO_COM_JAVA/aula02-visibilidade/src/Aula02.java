// Modificadores de Visibilidade
public class Aula02 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();

        c1.modelo = "BIC cristal";
        c1.cor = "Azul";
        // c1.ponta = 0.5;
        c1.carga = 80;
        // c1.tampada = false;
        c1.destampar();
        // Mesmo que o atributo 'tampada' seja privado eu estou usando um método público que usa o atributo, então assim posso acessá-lo;
        c1.status();
        c1.rabiscar();
    }
}