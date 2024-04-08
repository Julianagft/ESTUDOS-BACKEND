public class Caneta {
    public String modelo;
    public String cor;
    private float ponta;
    protected double carga;
    private boolean tampada;
    void status() {
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada?  " + this.tampada);
    }

    protected void rabiscar() {
        if(this.tampada == true) {
            System.out.println("ERRO! Não posso rabiscar se a caneta estiver tampada.");
        } else {
            System.out.println("Estou rabiscando!");
        }
    }

    public void tampar() {
        this.tampada = true;
    }

    public void destampar() {
        this.tampada = false;
    }

}
