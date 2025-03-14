using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Menu();
        }

        static void Menu() {
            Console.Clear();
            Console.WriteLine("O que deseja fazer?");
            Console.WriteLine("1 - Soma");
            Console.WriteLine("2 - Subtração");
            Console.WriteLine("3 - Divisão");
            Console.WriteLine("4 - Multiplicação");
            Console.WriteLine("0 - Sair");

            Console.WriteLine("----------------------------");
            Console.WriteLine("Selecione uma opção: ");
            short res = short.Parse(Console.ReadLine());

            switch (res) {
                case 1:
                    Console.WriteLine("Você escolheu Soma"); 
                    Soma();
                    break;
                case 2:
                    Console.WriteLine("Você escolheu Subtração");
                    Subtracao();
                    break;
                case 3:
                    Console.WriteLine("Você escolheu Divisão");
                    Divisao();
                    break;
                case 4:
                    Console.WriteLine("Você escolheu Multiplicação");
                    Multiplicacao();
                    break;
                case 0:
                    System.Environment.Exit(0);
                    break;
                default:
                    Menu();
                    break;
            }
        }

        static void Soma() {
            Console.WriteLine("Primeiro Valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo Valor: ");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine($"A soma de {v1} e {v2} é {v1 + v2}");
        }

        static void Subtracao() {
            Console.WriteLine("Primeiro Valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo Valor: ");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine($"A subtração de {v1} e {v2} é {v1 - v2}");    
        }

        static void Divisao() {
            Console.WriteLine("Primeiro Valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo Valor: ");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine($"{v1} dividido por {v2} é {v1 / v2}");    
        }

        static void Multiplicacao() {
            Console.WriteLine("Primeiro Valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo Valor: ");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine($"{v1} multiplicado por {v2} é {v1 * v2}");    
        }
    }
}