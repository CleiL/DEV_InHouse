using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ex7
{
    public class ContaBancaria
{
    public int NumeroDaConta { get; private set; }
    public const double SaldoMaximo = 10000.00; // Valor máximo permitido de saldo
    private double _saldo;

    public ContaBancaria(int numeroDaConta)
    {
        NumeroDaConta = numeroDaConta;
        _saldo = 0.0;
    }

    public void Depositar(double valor)
    {
        if (valor > 0 && _saldo + valor <= SaldoMaximo)
        {
            _saldo += valor;
            Console.WriteLine("Depósito realizado com sucesso. Novo saldo: {0:C}", _saldo);
        }
        else
        {
            Console.WriteLine("Valor inválido para depósito.");
        }
    }

    public void Sacar(double valor)
    {
        if (valor > 0 && valor <= _saldo)
        {
            _saldo -= valor;
            Console.WriteLine("Saque realizado com sucesso. Novo saldo: {0:C}", _saldo);
        }
        else
        {
            Console.WriteLine("Valor inválido para saque.");
        }
    }
}

}