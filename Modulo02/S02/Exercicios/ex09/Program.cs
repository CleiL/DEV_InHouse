using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Digite a quantidade de números que você deseja calcular a média: ");
        int quantidadeNumeros = int.Parse(Console.ReadLine());

        double[] numeros = new double[quantidadeNumeros]; // Cria um array com o tamanho informado pelo usuário

        // Solicita ao usuário que insira cada um dos números do array
        for (int i = 0; i < quantidadeNumeros; i++)
        {
            Console.Write("Digite o número #" + (i + 1) + ": ");
            numeros[i] = double.Parse(Console.ReadLine());
        }

        double soma = 0;

        // Soma todos os números do array
        foreach (double numero in numeros)
        {
            soma += numero;
        }

        // Calcula a média aritmética
        double media = soma / quantidadeNumeros;

        // Exibe o resultado na tela
        Console.WriteLine("A média aritmética dos números digitados é: " + media.ToString("F2"));

        Console.ReadLine();
    }
}
