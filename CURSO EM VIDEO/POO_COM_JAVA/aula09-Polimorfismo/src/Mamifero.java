public class Mamifero extends Animal {
    private String corPelo;
    @Override
    public void locomover() {
        System.out.print("Correndo");
    }

    @Override
    public void alimentar() {
        System.out.print("Mamando");
    }

    @Override
    public void emitirSom() {
        System.out.print("Som de mamífero");
    }

    public String getCorPelo() {
        return corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }
}
