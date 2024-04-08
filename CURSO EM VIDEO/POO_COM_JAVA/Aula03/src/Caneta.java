public class Caneta {
    private String modelo;
    private float ponta;
    private boolean tampada;
    private String cor;
    // protected double carga;

    public Caneta(String m, String c, float p) { // Método construtor
        this.modelo = m;
        this.cor = c;
        this.setPonta(p); //Da na mesma;
        this.tampar();

    }

    public String getModelo() {
        return this.modelo;
    }

    public void setModelo(String m) {
        // m é do tipo caractere;
        // Como esse não vai retornar nada posso deixar o tipo 'void';
        this.modelo = m;
    }

    public float getPonta() {
        return this.ponta;
    }

    public void setPonta(float p) {
        this.ponta = p;
    }

    public void tampar() {
        this.tampada = true;
    }

    public void destampar() {
        this.tampada = false;
    }

    public void status() {
        System.out.println("SOBRE A CANETA:");
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Cor: " + this.cor);
        System.out.println("Tampada: " + this.tampada);
    }
}

// OBS: SE EU APERTAR CTRL I ELE BASICAMENTE  TUDO PRA MIM;ESCREVE