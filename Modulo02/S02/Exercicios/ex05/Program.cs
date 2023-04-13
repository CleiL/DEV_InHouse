using System;

class Program
{
    static void Main()
    {
        int[] numeros = new int[4]; // Declaração do array para armazenar os números

        // Laço para ler os números do usuário e armazená-los no array
        for (int i = 0; i < 4; i++)
        {
            Console.Write($"Digite o {i + 1}º número: ");
            numeros[i] = Convert.ToInt32(Console.ReadLine());
        }

        Array.Sort(numeros); // Ordena o array em ordem crescente

        Console.WriteLine("Números ordenados: ");
        // Laço para imprimir os números ordenados na tela
        for (int i = 0; i < 4; i++)
        {
            Console.WriteLine(numeros[i]);
        }
    }
}
