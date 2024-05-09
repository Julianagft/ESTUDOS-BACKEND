import java.time.LocalDate;

public class Biblioteca_Virtual {
    public static void main(String[] args) {

        Livro l1 = new Livro();
        l1.setTitulo("O Código Da Vinci");
        l1.setAutor("Dan Brown");
        l1.setEditora("Arqueiro");
        l1.setReservado(true);

        Usuario u1 = new Usuario();
        u1.setNome("João Carlos");
        u1.setTelefone(859652341);
        LocalDate dataEmprestimo = LocalDate.of(2022, 5, 15);
        LocalDate dataAtual = LocalDate.now(); // Exemplo de data atual

        u1.setDataEmprestimo(dataEmprestimo);
        u1.setDataAtual(dataAtual);

        EmprestarLivros e1 = new EmprestarLivros();


        e1.statusLivro(l1, u1);

    }
}