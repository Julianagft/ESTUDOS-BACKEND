public class Peixe extends Animal {
    private String corEscama;
    @Override
    public void locomover() {
        System.out.print("Nadando");
    }

    @Override
    public void alimentar() {
        System.out.print("Comendo substancias");
    }

    @Override
    public void emitirSom() {
        System.out.print("Peixe não faz som!");
    }

    public void soltarBolha() {
        System.out.println("Soltando Bolha");
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
}
