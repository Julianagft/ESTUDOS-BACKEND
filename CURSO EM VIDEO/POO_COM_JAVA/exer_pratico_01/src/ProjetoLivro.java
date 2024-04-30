public class ProjetoLivro {
    public static void main(String[] args) {
       Pessoa[] p = new Pessoa[2];
       Livro[] l = new Livro[3];

       p[0] = new Pessoa("Juliana", 28, 'F');
        p[1] = new Pessoa("Thiago", 27, 'M');

        l[0] = new Livro("O Conto da Aya", "Margaret Atwood", 368, 150, p[0]);

        l[1] = new Livro("HEX", "Thomas Olde Heuvelt", 368, 50, p[1]);

        l[2] = new Livro("Homens sem mulheres", "Haruki Murakami", 240, 86, p[0]);

        l[0].abrir();
        l[0].folhear(150);
        l[1].abrir();
        l[1].folhear(50);
        l[2].abrir();
        l[2].folhear(86);
        l[2].avancarPag(); // vai para a página 87;


        System.out.println(l[0].detalhes());
        System.out.println("-------------------------");
        System.out.println(l[1].detalhes());
        System.out.println("-------------------------");
        System.out.println(l[2].detalhes());
    }
}