using System;
using System.Data.Common;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            var funcionarios = new Funcionario[1];
            funcionarios[0] = new Funcionario() {id = 123};

            foreach (var funcionario in funcionarios) {
                Console.WriteLine(funcionario.id);
            }
        }

        public struct Funcionario 
        {
            public int id { get; set; }
           
        }

    }
}