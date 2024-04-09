public class ControleRemoto extends Controlador {
    // ATRIBUTOS
    private int volume;
    private boolean ligado;
    private boolean tocando;

    // MÉTODO CONSTRUTOR
    public ControleRemoto() {
        volume = 50;
        ligado = false;
        tocando = false;
    }

    // MÉTODOS ESPECIAIS
    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public boolean getLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

    public boolean getTocando() {
        return tocando;
    }

    public void setTocando(boolean tocando) {
        this.tocando = tocando;
    }

    public void ligar() {
        setLigado(true);
    }

    public void desligar() {
        setLigado(false);
    }

    public void abrirMenu() {
        System.out.println(getLigado());
        System.out.println(getVolume());

        for (int i = 0; i < getVolume(); i += 10) {
            System.out.print("|");
        }

        System.out.println(getTocando());
    }

    public void fecharMenu() {

    }

    public void maisVolume() {
        if(getLigado()) {
            setVolume(getVolume() + 1);
        }
    }

    public void menosVolume() {
        if(getLigado()) {
            setVolume(getVolume() - 1);
        }
    }

    public void ligarMudo() {
        if (getLigado() && getVolume() > 0) {
          setVolume(0);
        }
    }

    public void desligarMudo() {
        if (getLigado() && getVolume() == 0) {
            setVolume(50);
        }
    }

    public void play() {
        if(getLigado() && !getTocando()) {
            setTocando(true);
        }
    }

    public void pause() {
        if (getLigado() && getTocando()) {
            setTocando(false);
        }
    }

}
