public class Bolsista extends Aluno {
    private float bolsa;
    public void renovarBolsa() {
        System.out.println("Renovando bolda de " + this.nome);
        // Posso acessar o atributo 'nome' diretamente sem o getNome por que ele está protected e não private;
    }
@Override
    public void pagarMensalidade() {
        System.out.println(this.nome + " é bolsista! Pagamento facilitado.");
    }
    // É um método sobreposto;


    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }
}
