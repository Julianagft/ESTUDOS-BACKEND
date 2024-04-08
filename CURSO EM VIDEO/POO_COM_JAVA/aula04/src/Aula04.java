public class Aula04 {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta(125793);
        p1.setDono("Jubileu da Silva");
        p1.abrirConta("CC");
        p1.depositar(100);
        p1.estadoAtualDaConta();

        ContaBanco p2 = new ContaBanco();
        p2.setNumConta(122238);
        p2.setDono("Jubilete Pereira");
        p2.abrirConta("CP");
        p2.depositar(500);
        p2.sacar(1000);
        p2.estadoAtualDaConta();
    }
}
