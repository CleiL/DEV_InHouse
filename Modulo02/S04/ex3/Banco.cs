using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bancos
{
    public class Banco
    {
        private double saldo;

    public Banco(double saldoInicial) {
        saldo = saldoInicial;
    }

    public void Depositar(double valor) {
        saldo += valor;
    }

    public void Sacar(double valor) {
        saldo -= valor;
    }

    public override string ToString() 
    {
        return $"Saldo atual: {saldo}";
    }
    }
}