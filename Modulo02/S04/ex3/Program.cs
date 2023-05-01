using System;
using Clientes;
using ContaBancarias;
using Bancos;

class Program
{
    static void Main(string[] args)
    {
        // Criar um objeto Cliente
        Cliente cliente = new Cliente("Clei Santos", "999.888.777-44");

        // Criar um objeto ContaBancaria
        ContaBancaria conta = new ContaBancaria(222, cliente, 0);

        // Exibir dados da conta
        conta.ExibirDados();

        // Realizar um depósito
        conta.Depositar(500);

        // Realizar um saque
        conta.Sacar(200);

        // Exibir dados da conta novamente
        conta.ExibirDados();

        Console.ReadKey();
    }
}