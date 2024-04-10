public class ControleRemoto implements Controlador {
    // ATRIBUTOS
    private int volume;
    private boolean ligado;
    private boolean tocando;

    // MÉTODO CONSTRUTOR
    public ControleRemoto() {
        this.volume = 50;
        this.ligado = true;
        this.tocando = false;
    }

    // MÉTODOS ESPECIAIS

    // Eu deixei todos 'private' apenas para provar que dá pra fazer assim, mas não é recomendado.

    private int getVolume() {
        return volume;
    }

    private void setVolume(int volume) {
        this.volume = volume;
    }

    private boolean getLigado() {
        return ligado;
    }

    private void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

    private boolean getTocando() {
        return tocando;
    }

    private void setTocando(boolean tocando) {
        this.tocando = tocando;
    }


    // MÉTODOS ABSTRATOS

    @Override
    public void ligar() {
        setLigado(true);
    }

    @Override
    public void desligar() {
        setLigado(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("---------- MENU ----------");
        System.out.println("Está ligado? " + this.getLigado());
        System.out.println("Está tocando ? " + this.getTocando());
        System.out.println("Volume: " + this.getVolume());

        for (int i = 0; i <= this.getVolume(); i += 10) {
            System.out.print("|");
            System.out.print(" ");
        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu");
    }

    @Override
    public void maisVolume() {
        if(this.getLigado()) {
            this.setVolume(this.getVolume() + 5);
        } else {
            System.out.println("A TV está desligada.");
        }
    }

    @Override
    public void menosVolume() {
        // vai diminuir o volume de 5 em 5;
        if(this.getLigado()) {
            this.setVolume(this.getVolume() - 5);
        } else {
            System.out.println("A TV está desligada.");
        }

    }

    @Override
    public void ligarMudo() {
        if (this.getLigado() && this.getVolume() > 0) {
          this.setVolume(0);
        } else {
            System.out.println("A TV está desligada.");
        }
    }

    @Override
    public void desligarMudo() {
        if (this.getLigado() && this.getVolume() == 0) {
            this.setVolume(50);
        } else {
            System.out.println("A TV está desligada.");
        }
    }

    @Override
    public void play() {
        if(this.getLigado() && !(this.getTocando())) {
            this.setTocando(true);
        } else {
            System.out.println("A TV está desligada.");
        }
    }

    @Override
    public void pause() {
        if (this.getLigado() && this.getTocando()) {
            this.setTocando(false);
        } else {
            System.out.println("A TV está desligada.");
        }
    }
}
