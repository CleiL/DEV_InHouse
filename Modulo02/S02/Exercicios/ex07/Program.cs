using System;

class Program
{
    static void Main(string[] args)
    {
        int numero = 0;
        bool numeroValido = false;

        while (!numeroValido)
        {
            Console.Write("Digite um número inteiro positivo: ");
            if (int.TryParse(Console.ReadLine(), out numero) && numero > 0)
            {
                numeroValido = true;
            }
            else
            {
                Console.WriteLine("Número inválido. Digite novamente.");
            }
        }

        Console.WriteLine("Números pares de 0 até " + numero + ":");

        for (int i = 0; i <= numero; i += 2)
        {
            Console.WriteLine(i);
        }

        Console.ReadLine();
    }
}
