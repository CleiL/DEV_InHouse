using System;

class Program
{
    static void Main(string[] args)
    {
        bool continuar = true;

        while (continuar)
        {
            Console.WriteLine("CALCULADORA SIMPLES");
            Console.WriteLine("Escolha a operação:");
            Console.WriteLine("1. Soma");
            Console.WriteLine("2. Subtração");
            Console.WriteLine("3. Multiplicação");
            Console.WriteLine("4. Divisão");
            Console.WriteLine("5. Sair");
            Console.Write("Digite o número da opção desejada: ");
            int opcao = int.Parse(Console.ReadLine());

            double num1, num2, resultado;

            switch (opcao)
            {
                case 1: // Soma
                    Console.Write("Digite o primeiro número: ");
                    num1 = double.Parse(Console.ReadLine());
                    Console.Write("Digite o segundo número: ");
                    num2 = double.Parse(Console.ReadLine());
                    resultado = num1 + num2;
                    Console.WriteLine("Resultado: " + resultado);
                    break;

                case 2: // Subtração
                    Console.Write("Digite o primeiro número: ");
                    num1 = double.Parse(Console.ReadLine());
                    Console.Write("Digite o segundo número: ");
                    num2 = double.Parse(Console.ReadLine());
                    resultado = num1 - num2;
                    Console.WriteLine("Resultado: " + resultado);
                    break;

                case 3: // Multiplicação
                    Console.Write("Digite o primeiro número: ");
                    num1 = double.Parse(Console.ReadLine());
                    Console.Write("Digite o segundo número: ");
                    num2 = double.Parse(Console.ReadLine());
                    resultado = num1 * num2;
                    Console.WriteLine("Resultado: " + resultado);
                    break;

                case 4: // Divisão
                    Console.Write("Digite o primeiro número: ");
                    num1 = double.Parse(Console.ReadLine());
                    Console.Write("Digite o segundo número: ");
                    num2 = double.Parse(Console.ReadLine());

                    if (num2 == 0)
                    {
                        Console.WriteLine("Erro: não é possível dividir por zero!");
                    }
                    else
                    {
                        resultado = num1 / num2;
                        Console.WriteLine("Resultado: " + resultado);
                    }
                    break;

                case 5: // Sair
                    continuar = false;
                    break;

                default:
                    Console.WriteLine("Opção inválida! Por favor, tente novamente.");
                    break;
            }

            Console.WriteLine();
        }

        Console.WriteLine("Obrigado por utilizar a calculadora!");
        Console.ReadLine();
    }
}
