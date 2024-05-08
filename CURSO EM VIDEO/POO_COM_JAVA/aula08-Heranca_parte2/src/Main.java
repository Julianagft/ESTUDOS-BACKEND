public class Main {
    public static void main(String[] args) {
        // Pessoa p1 = new Pessoa();
        // Não posso instanciar pessoa pois é uma classe abstrata;

        Visitante v1 = new Visitante();

        v1.setNome("Juvenal");
        v1.setIdade(32);
        v1.setSexo("M");
        System.out.println(v1.toString());

        // Ou seja, não pude estanciar 'Pessoa' por ser uma classe abstrata, mas pude estanciar 'Visitante' que herda todos os atributos de pessoa e não implementa nada novo;

        Aluno a1 = new Aluno();

        a1.setNome("João Pedro");
        a1.setSexo("M");
        a1.setIdade(28);
        a1.setCurso("Ciências da computação");
        a1.setMatricula(123456);
        a1.pagarMensalidade();

        Bolsista b1 = new Bolsista();
        b1.setNome("Lupita");
        b1.setMatricula(85123);
        b1.setBolsa(12.5f);
        b1.setSexo("F");
        b1.pagarMensalidade();
        // O pagarMensalidade() terá uma saída diferente do aluno João Pedro, por que é um método sobreposto;

        // Se eu tivesse classificado esse método como final 'final' (public final void) ele teria dado erro, pois um método final não pode ser sobreescrito pelas suas subclasses;
    }
}