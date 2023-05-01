using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ex10
{
    public class ContaBancaria
    {
        private decimal saldo;
        private List<string> transacoes;

        public ContaBancaria()
        {
            saldo = 0;
            transacoes = new List<string>();
        }

        public void Depositar(decimal valor)
        {
            saldo += valor;
            string transacao = $"Depósito: +{valor:C}. Novo saldo: {saldo:C}.";
            transacoes.Add(transacao);
        }

        public bool Sacar(decimal valor)
        {
            if (valor <= saldo)
            {
                saldo -= valor;
                string transacao = $"Saque: -{valor:C}. Novo saldo: {saldo:C}.";
                transacoes.Add(transacao);
                return true;
            }
            else
            {
                return false;
            }
        }

        public decimal VerificarSaldo()
        {
            return saldo;
        }

        public List<string> VerificarTransacoes()
        {
            return transacoes;
        }
    }
}