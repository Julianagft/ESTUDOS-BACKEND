using System;
// ("Test" é o nome do arquico que irei usar aqui dentro)

namespace MyApp {
    class Program
    {
        static void Main(string[] args)
        {
            int inteiro = 100;
            float real = 10.50f;

            // real = inteiro; (CONVERSÃO IMPLÍCITA)
            // inteiro = (int)real; (CONVERSÃO EXPLÍCITA)

            // inteiro = int.Parse("100"); (USANDO O PARSE);

             inteiro = Convert.ToInt32(real); 
            //converteu o real para um número inteiro

            // Console.WriteLine(inteiro);
            Console.WriteLine(inteiro);
            
        }
    }
}

// using faz o papel do import.
// vsr no c# é a forma que temos para evitar escrever o tipo da informação no começo da variavel 
// ex: var x = 10, int x = 10; (ambos estão corretos);