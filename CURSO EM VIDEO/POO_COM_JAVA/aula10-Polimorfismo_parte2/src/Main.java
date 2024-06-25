public class Main {
    public static void main(String[] args) {
        Cachorro c = new Cachorro();
        c.reagir("Olá");
        c.reagir(false);
        c.reagir(11,45);
        c.reagir(15,0);
        c.reagir(6, 12.00f);
    }
}