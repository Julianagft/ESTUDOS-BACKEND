using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Product mouse = new Product(2, "Mouse Gamer", 299.97);
            // tanto posso dev=finir o valor da variável na criação do objeto quanto depois;
            mouse.Id = 1;
            Console.WriteLine(mouse.Id);
            Console.WriteLine(mouse.Name);
            Console.WriteLine(mouse.Price);
            
        }
    }

    struct Product 
    {

        // A única diferença é que quando criamos um método construtor precisamos explicitar as propriedades;
        public Product(int Id, string Name, double Price) {
            this.Id = Id;
            this.Name = Name;
            this.Price = Price;

        }

        public int Id;
        public string Name;
        public double Price;
        public double PriceInDolar(double dolar) {
            return Price * dolar;
        }
    }
}
