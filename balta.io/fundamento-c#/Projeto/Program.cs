    using System;

    namespace Calculator
    {
        class Program
        {
            static void Main(string[] args)
            {
                Soma();
            }

            static void Soma() {
                    Console.Clear();
                    Console.WriteLine("Primeiro Valor: ");
                    float v1 = float.Parse(Console.ReadLine());
                    // string v1 = Console.ReadLine();

                    Console.WriteLine("Segundo Valor: ");
                    float v2 = float.Parse(Console.ReadLine());
                    // string v2 = Console.ReadLine();

                    Console.WriteLine($"A soma de {v1} e {v2} é {v1 + v2}");
                }

        }
    }