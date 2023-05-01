using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bancos;
using Clientes;

namespace ContaBancarias
{
    public class ContaBancaria
    {
        private int numero;
    private Cliente cliente;
    private Banco banco;

    public ContaBancaria(int numero, Cliente cliente, double saldoInicial) 
    {
        this.numero = numero;
        this.cliente = cliente;
        banco = new Banco(saldoInicial);
    }

    public void Depositar(double valor) {
        banco.Depositar(valor);
    }

    public void Sacar(double valor) {
        banco.Sacar(valor);
    }

    public void ExibirDados() {
        Console.WriteLine($"Número da conta: {numero}");
        Console.WriteLine($"Nome do cliente: {cliente.Nome}");
        Console.WriteLine($"CPF do cliente: {cliente.Cpf}");
        Console.WriteLine($"Saldo do cliente: {banco.ToString()}");
    }

    public override string ToString() 
    {
        return $"Número da conta: {numero}\nNome do cliente: {cliente.Nome}\nCPF do cliente: {cliente.Cpf}\nSaldo: {banco.ToString()}";
    }
    }
}