public class Livro implements Publicacao {
    private String titulo, autor;
    private int totPaginas, pagAtual;
    private boolean aberto;
    private Pessoa leitor;

    public String detalhes() {
        //Vai retornar a função detalhes como uma string;
        return "Livro{" +
                "\ntitulo='" + titulo + ';' +
                "\nautor='" + autor + ';' +
                "\ntotPaginas=" + totPaginas + ';' +
                "\npagAtual=" + pagAtual + ';' +
                "\naberto=" + aberto + ';' +
                "\nleitor=" + leitor.getNome() + ';' +
                '}';
    }

    public Livro(String titulo, String autor, int totPaginas, int pagAtual, Pessoa leitor) {
        this.titulo = titulo;
        this.autor = autor;
        this.totPaginas = totPaginas;
        this.pagAtual = 0;
        this.aberto = false;
        this.leitor = leitor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {

        this.titulo = titulo;
    }

    public String getAutor() {

        return autor;
    }

    public void setAutor(String autor) {

        this.autor = autor;
    }

    public int getTotPaginas() {
        return totPaginas;
    }

    public void setTotPaginas(int totPaginas) {
        this.totPaginas = totPaginas;
    }

    public int getPagAtual() {

        return pagAtual;
    }

    public void setPagAtual(int pagAtual) {

        this.pagAtual = pagAtual;
    }

    public boolean getAberto() {

        return aberto;
    }

    public void setAberto(boolean aberto) {

        this.aberto = aberto;
    }

    public Pessoa getLeitor() {

        return leitor;
    }

    public void setLeitor(Pessoa leitor) {

        this.leitor = leitor;
    }

    @Override
    public void abrir() {
        this.aberto = true;
    }

    @Override
    public void fechar() {
        this.aberto = false;
    }

    @Override
    public void folhear(int p) {
        if(p > this.totPaginas) {
            this.pagAtual = 0;
            System.out.println("A quantidade de páginas ultrapassou o total de páginas do livro ");
        } else {
            this.pagAtual = p;
        }
    }

    @Override
    public void avancarPag() {
        this.pagAtual++;
    }

    @Override
    public void voltarPag() {
        this.pagAtual--;
    }
}
