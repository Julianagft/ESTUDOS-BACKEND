using System;
// ("Test" é o nome do arquico que irei usar aqui dentro)

namespace MyApp {
    class Program
    {
        static void Main(string[] args)
        {
            var texto = "Testando";
            const int IDADE = 24;
            byte meuByte = 255;
            float salario = 1.500f;
            decimal salarioAnual = 25000m;
            bool usuarioCadastrado = false;
            var verdade = true;
            Console.WriteLine(texto);
            Console.WriteLine(salario); 
            Console.WriteLine(salarioAnual); 
        }
    }
}

// using faz o papel do import.
// vsr no c# é a forma que temos para evitar escrever o tipo da informação no começo da variavel 
// ex: var x = 10, int x = 10; (ambos estão corretos);