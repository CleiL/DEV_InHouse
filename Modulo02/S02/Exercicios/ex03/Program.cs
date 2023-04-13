using System;

namespace InformacoesPaciente
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o nome do paciente:");
            string nome = Console.ReadLine(); // Lê o nome do paciente digitado pelo usuário

            Console.WriteLine("Digite a idade do paciente:");
            int idade = Convert.ToInt32(Console.ReadLine()); // Lê a idade do paciente digitada pelo usuário

            // Verifica se o paciente é menor de idade (menor que 18 anos)
            if (idade < 18)
            {
                Console.WriteLine("Nome do paciente: " + nome);
                Console.WriteLine("Idade do paciente: " + idade + " anos");
                Console.WriteLine("O paciente é menor de idade.");
            }
            // Verifica se o paciente é idoso (60 anos ou mais)
            else if (idade >= 60)
            {
                Console.WriteLine("Nome do paciente: " + nome);
                Console.WriteLine("Idade do paciente: " + idade + " anos");
                Console.WriteLine("O paciente é um idoso.");
            }
            // Caso não seja menor de idade nem idoso, é considerado maior de idade
            else
            {
                Console.WriteLine("Nome do paciente: " + nome);
                Console.WriteLine("Idade do paciente: " + idade + " anos");
                Console.WriteLine("O paciente é maior de idade.");
            }
        }
    }
}
