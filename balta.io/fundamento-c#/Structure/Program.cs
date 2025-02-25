using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Product mouse = new Product(2, "Mouse Gamer", 299.97, EProductType.Product);
            // tanto posso dev=finir o valor da variável na criação do objeto quanto depois;
            var manutencaoEletrica = new Product(2, "Manutenção elétrica residencial", 300f, EProductType.Service);
            mouse.Id = 1;
            Console.WriteLine(mouse.Id);
            Console.WriteLine(mouse.Name);
            Console.WriteLine(mouse.Price);
            Console.WriteLine(mouse.Type);
            Console.WriteLine(manutencaoEletrica.Name);
            
        }
    }

    struct Product 
    {

        // A única diferença é que quando criamos um método construtor precisamos explicitar as propriedades;
        public Product(int Id, string Name, double Price, EProductType type) {
            this.Id = Id;
            this.Name = Name;
            this.Price = Price;
            this.Type = type;

        }

        public int Id;
        public string Name;
        public double Price;
        public EProductType Type;
        public double PriceInDolar(double dolar) {
            return Price * dolar;
        }
    }

    enum EProductType {
        Product = 1,
        Service = 2
    }




}
