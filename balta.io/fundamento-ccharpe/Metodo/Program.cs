using System;

namespace Operadores {
    class Program {
        static void Main(string[] args) {
            MeuMetodo();
        }
        // Não posso ter método dentro de método dentro de C#

        static void MeuMetodo() {
            Console.WriteLine("Meu método");
        }
    }
}
