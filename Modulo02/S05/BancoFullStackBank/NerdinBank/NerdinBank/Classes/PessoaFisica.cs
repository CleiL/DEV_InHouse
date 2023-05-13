using NerdinBank.Interfaces;

namespace NerdinBank.Classes
{
    internal class PessoaFisica : Cliente, IPessoaFisica
    {
        public PessoaFisica(string agencia, string numero) : base(agencia, numero)
        {
        }

        public string ?CPF { get; set; }
        public string ?dataNascimento { get; set; }

        public override void ResumoCliente()
        {
            throw new NotImplementedException();
        }

        public override bool Sacar(double valor)
        {
            throw new NotImplementedException();
        }

        public bool ValidarDataNascimento(DateTime dataNascimento)
        {
            DateTime dataAtual = DateTime.Today;
            double anos = (dataAtual - dataNascimento).TotalDays / 365;
            if (anos > 18)
                return true;
            else
                return false;
        }

        public bool ValidarDataNascimento(string dataNascimento)
        {
            DateTime dataConvertida;
            //Verificar se a string esta em um formato valido
            if(DateTime.TryParse(dataNascimento, out dataConvertida))
            {
                DateTime dataAtual = DateTime.Today;
                double anos = (dataAtual - dataAtual).TotalDays / 365;
                if (anos >= 18)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            return false;
        }
    }
}
