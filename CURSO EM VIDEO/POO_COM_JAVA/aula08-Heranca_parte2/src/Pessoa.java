public abstract class Pessoa {
    protected String nome, sexo;
    protected int idade;
    protected void fazerAniversario() {
        this.idade++;
    }

    // O acesso protegido dá acesso a própria classe e a classe imediatamente anterior a ela (a superclasse);

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", idade=" + idade +
                '}';
    }
}
