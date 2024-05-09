import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Usuario {
    private String nome;
    private int telefone, diasDeEmprestimo;
    private LocalDate dataEmprestimo; // Data de empréstimo
    private LocalDate dataAtual; // Data atual

    public String situacaoEmprestimo() {
        long diasDeEmprestimo = ChronoUnit.DAYS.between(dataEmprestimo, dataAtual);
        if (diasDeEmprestimo > 15) {
            return "Excedeu dia máximo de empréstimo";
        } else {
            return "Situação de empréstimo regular.";

        }
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public int getTelefone() {
        return telefone;
    }
    public void setTelefone(int telefone) {
        this.telefone = telefone;
    }
    // Métodos para definir a data de empréstimo e a data atual
    public void setDataEmprestimo(LocalDate dataEmprestimo) {
        this.dataEmprestimo = dataEmprestimo;
    }
    public void setDataAtual(LocalDate dataAtual) {
        this.dataAtual = dataAtual;
    }
    public int getDiasDeEmprestimo() {
        return diasDeEmprestimo;
    }

    public void setDiasDeEmprestimo(int diasDeEmprestimo) {
        this.diasDeEmprestimo = diasDeEmprestimo;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "nome='" + nome + '\'' +
                ", telefone=" + telefone +
                "Situação do emprestimo: " + situacaoEmprestimo();
    }
}
