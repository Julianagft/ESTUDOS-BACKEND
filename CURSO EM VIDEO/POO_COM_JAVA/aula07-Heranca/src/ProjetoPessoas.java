public class ProjetoPessoas {
    public static void main(String[] args) {

        Pessoa p1 = new Pessoa();
        Aluno p2 = new Aluno();
        Professor p3 = new Professor();
        Funcionario p4 = new Funcionario();

        p1.setNome("Pedro");
        p1.setSexo("M");
        p1.setIdade(30);

        p2.setNome("Fabiano");
        p2.setSexo("M");
        p2.setIdade(18);
        p2.setCurso("Matemática");

        p3.setNome("Maria");
        p3.setSexo("F");
        p3.setIdade(29);
        p3.setSalario(2000f);

        p4.setNome("Paulo");
        p4.setSexo("M");
        p4.setIdade(42);
        p4.setSetor("Administração");

        System.out.println(p1.toString());
        System.out.println(p2.toString());
        System.out.println(p3.toString());
        System.out.println(p4.toString());

        //p2.setSalario(1500f); Não funciona pq Salario é um atributo apenas de professor. Não pode ser aplicada nem as outras subclasses nem a classe principal 'Pessoa';
    }
}