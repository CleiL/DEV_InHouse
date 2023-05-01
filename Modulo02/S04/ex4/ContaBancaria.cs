using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ex4
{
    private double saldo;

    public double Saldo
    {
        get { return saldo; }
        private set
        {
            if (value >= 0)
            {
                saldo = value;
            }
        }
    }

    public void Depositar(double valor)
    {
        Saldo += valor;
    }

    public bool Sacar(double valor)
    {
        if (Saldo - valor >= 0)
        {
            Saldo -= valor;
            return true;
        }
        else
        {
            return false;
        }
    }
}