using System;

namespace SomaNumeros
{
    class Programa
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o primeiro número inteiro:");
            int numero1 = Convert.ToInt32(Console.ReadLine()); // Lê o primeiro número digitado pelo usuário

            Console.WriteLine("Digite o segundo número inteiro:");
            int numero2 = Convert.ToInt32(Console.ReadLine()); // Lê o segundo número digitado pelo usuário

            int soma = numero1 + numero2; // Calcula a soma dos números

            Console.WriteLine("A soma dos números é: " + soma); // Exibe a soma na tela
        }
    } 
}
