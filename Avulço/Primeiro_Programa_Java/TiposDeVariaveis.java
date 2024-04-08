import java.time.DayOfWeek;

public class TiposDeVariaveis {
    public static void main(String[] args) {
        // Tipos primitivos
        byte idade = 25;
        short codigo = 12345;
        int quantidade = 1000;
        long populacao = 7894561230L;
        float altura = 1.75f;
        double peso = 68.5;
        char genero = 'M';
        boolean ativo = true;

        // Tipos de referência
        String nome = "João";
        int[] numeros = {1, 2, 3, 4, 5};

        DayOfWeek myDay = DayOfWeek.FRIDAY;
        System.out.println(myDay);
    }
}
