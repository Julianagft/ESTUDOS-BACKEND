using System;
// ("Test" é o nome do arquico que irei usar aqui dentro)

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var texto = "Testando";
            const IDADE = 24;
            Console.WriteLine(texto);
        }
    }
}

// using faz o papel do import.
// vsr no c# é a forma que temos para evitar escrever o tipo da informação no começo da variavel 
// ex: var x = 10, int x = 10; (ambos estão corretos);