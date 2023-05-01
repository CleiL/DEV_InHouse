using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContaBanco
{
    public class ContaBancaria
    {
        private int NumeroConta;
        private double Saldo;

        public ContaBancaria (int NumeroConta)
        {
            this.NumeroConta = NumeroConta;
            this.Saldo = 0;
        }

        public void Depositar(double valor)
        {
            this.Saldo += valor;
        }

        public void Sacar(double valor)
        {
            if (valor <= this.Saldo)
            {
                this.Saldo -= valor;
            }
            else
            {
                Console.WriteLine("Saldo insuficiente!");
            }
        }

        public double getSaldo()
        {
            return this.Saldo;
        }
    }

}