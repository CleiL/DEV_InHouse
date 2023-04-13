using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string frase = "A linguagem de programação C# é muito poderosa"; // Declaração da variável frase

        List<string> palavras = new List<string>(); // Criação da lista de palavras

        // Separando as palavras e adicionando-as na lista
        string[] palavrasArray = frase.Split(' '); // Separando as palavras da frase usando espaço como delimitador
        palavras.AddRange(palavrasArray); // Adicionando as palavras separadas na lista

        // Exibindo apenas a palavra "poderosa"
        string? palavraPoderosa = palavras.Find(palavra => palavra == "poderosa");
        if (palavraPoderosa != null)
        {
            Console.WriteLine("Palavra encontrada: " + palavraPoderosa);
        }
        else
        {
            Console.WriteLine("Palavra não encontrada.");
        }
    }
}
