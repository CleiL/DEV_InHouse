using System;

class Program
{
    static void Main(string[] args)
    {
        int[] numeros = new int[5]; // Cria um array de tamanho 5 para armazenar os números

        // Solicita ao usuário que digite cinco números inteiros e armazena-os no array
        for (int i = 0; i < 5; i++)
        {
            Console.Write("Digite o número #" + (i + 1) + ": ");
            numeros[i] = int.Parse(Console.ReadLine());
        }

        // Encontra o maior número no array
        int maiorNumero = numeros[0]; // Assume que o primeiro número é o maior

        for (int i = 1; i < 5; i++) // Começa a busca a partir do segundo número
        {
            if (numeros[i] > maiorNumero)
            {
                maiorNumero = numeros[i];
            }
        }

        // Exibe o maior número na tela
        Console.WriteLine("O maior número digitado é: " + maiorNumero);

        Console.ReadLine();
    }
}
