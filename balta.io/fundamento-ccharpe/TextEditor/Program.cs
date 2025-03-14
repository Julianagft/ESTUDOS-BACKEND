using System;
using System.IO;

namespace TextEditor
{
    class Program
    {
        static void Main(string[] args)
        {
            Menu();
        }

        static void Menu()
        {
            Console.Clear();
            Console.WriteLine("O que você deseja fazer?");
            Console.WriteLine("1 - Abrir arquivo");
            Console.WriteLine("2 - Criar novo arquivo");
            Console.WriteLine("0 - Sair");
            short option = short.Parse(Console.ReadLine());

            switch (option)
            {
                case 0: System.Environment.Exit(0); break;
                case 1: Open(); break;
                case 2: Edit(); break;
                default: Menu(); break;
            }
        }

        static void Edit()
        {
            Console.Clear();
            Console.WriteLine("Digite seu texto abaixo (ESC para sair)");
            Console.WriteLine("...............................");
            string text = "";

            do
            {
                text += Console.ReadLine();
                text += Environment.NewLine;
            } while (Console.ReadKey().Key != ConsoleKey.Escape);

            Save(text);
        }

        static void Save(string text)
        {
            Console.Clear();
            Console.WriteLine("Qual o caminho para salvar o arquivo?");

            string path = Console.ReadLine()?.Trim(); // Remove espaços em branco

            try
            {
                // Valida se o caminho é nulo ou vazio
                if (string.IsNullOrWhiteSpace(path))
                {
                    Console.WriteLine("Caminho inválido. Por favor, insira um caminho válido.");
                    Save(text); // Chama a função novamente para solicitar um caminho válido
                    return;
                }

                // Verifica se o diretório existe
                var directory = Path.GetDirectoryName(path);
                if (!Directory.Exists(directory))
                {
                    Console.WriteLine("O diretório especificado não existe. Deseja criá-lo? (S/N)");
                    var resposta = Console.ReadLine()?.Trim().ToUpper();

                    if (resposta == "S")
                    {
                        Directory.CreateDirectory(directory); // Cria o diretório
                    }
                    else
                    {
                        Console.WriteLine("Operação cancelada.");
                        Menu();
                        return;
                    }
                }

                // Salva o arquivo
                using (var file = new StreamWriter(path))
                {
                    file.Write(text);
                }

                Console.WriteLine($"Arquivo {path} salvo com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao salvar o arquivo: {ex.Message}");
            }

            Console.ReadLine();
            Menu();
        }

        static void Open()
        {
            Console.Clear();
            Console.WriteLine("Qual o caminho do arquivo?");
            string path = Console.ReadLine().Trim();

            try
            {
                using (var file = new StreamReader(path))
                {
                    string text = file.ReadToEnd();
                    Console.WriteLine(text);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao abrir o arquivo: {ex.Message}");
            }

            Console.WriteLine("");
            Console.ReadLine();
            Menu();
        }

    }
}