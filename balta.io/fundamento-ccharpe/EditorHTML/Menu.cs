using System;

namespace EditorHTML 
{
    public static class Menu
    {
        public static void Show()
        {
            Console.Clear();
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.Blue;

            DrawScreen();
        }

        public static void DrawScreen()
        {
            Console.Write("+");
            for(int i = 0; i <= 30; i++)
            {
                Console.Write("-");
            }

            Console.WriteLine("+");
            Console.Write("\n");

            for(int lines = 0; lines <= 10; lines++) 
            {
                Console.Write("|");
                for(int i = 0; i <= 30; i++){
                    Console.Write(" ");
                }
                Console.WriteLine("|");
                 Console.Write("\n");
            }
        }


    }
}