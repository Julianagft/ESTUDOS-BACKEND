public class EmprestarLivros {

    public void statusLivro(Livro livro, Usuario usuario) {
        if (!livro.estaDisponivel()) {
            System.out.println("O livro \"" + livro.getTitulo() + "\" foi emprestado para " + usuario.getNome() + ".");
            System.out.println("Informações do usuário: " + usuario.toString());
            livro.setReservado(true); // Define o livro como reservado

        } else {
            System.out.println("Livro disponível para empréstimo!");
        }
    }
}

