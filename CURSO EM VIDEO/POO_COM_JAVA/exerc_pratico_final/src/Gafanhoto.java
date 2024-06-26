public class Gafanhoto extends Pessoa {
    private String Login;
    private int toAssistido;

    public Gafanhoto(String nome, int idade, String sexo, String login) {
        super(nome, idade, sexo);
        Login = login;
        this.toAssistido = 0;
    }

    public String getLogin() {
        return Login;
    }

    public void setLogin(String login) {
        Login = login;
    }

    public int getToAssistido() {
        return toAssistido;
    }

    public void setToAssistido(int toAssistido) {
        this.toAssistido = toAssistido;
    }

    @Override
    public String toString() {
        return "Gafanhoto{" + super.toString() +
                "\nLogin='" + Login + '\'' +
                ", toAssistido=" + toAssistido +
                '}';
    }
}
