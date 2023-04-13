using System;

namespace ParOuImpar
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um número inteiro:");
            int numero = Convert.ToInt32(Console.ReadLine()); // Lê o número digitado pelo usuário

            if (numero % 2 == 0) // Verifica se o número é par
            {
                Console.WriteLine("O número " + numero + " é par.");
            }
            else
            {
                Console.WriteLine("O número " + numero + " é ímpar.");
            }
        }
    }
}