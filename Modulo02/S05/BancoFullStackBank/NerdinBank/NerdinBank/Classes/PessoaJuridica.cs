using NerdinBank.Interfaces;
using System.Text.RegularExpressions;

namespace NerdinBank.Classes
{
    internal class PessoaJuridica : Cliente, IPessoaJuridica
    {
        public PessoaJuridica(string agencia, string numero) : base(agencia, numero)
        {
        }

        public string ?CNPJ { get; set; }
        public string ?RazaoSocial { get; set; }

        public override void ResumoCliente()
        {
            throw new NotImplementedException();
        }

        public override bool Sacar(double valor)
        {
            throw new NotImplementedException();
        }

        public bool ValidarCNPJ(string cnpj)
        {
            if (Regex.IsMatch (cnpj, @"(^(\d{2}.\d{3}.\d{3}/\d{4}-\d{2})|(\d{14})$)"))
            {
                if (cnpj.Length == 18)
                {
                    if (cnpj.Substring(11,4) == "0001")
                    {
                        return true;
                    }
                }
                else if (cnpj.Length == 14)
                {
                    if (cnpj.Substring(8,4) == "0001")
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
