using NerdinBank.Interfaces;

namespace NerdinBank.Classes
{
    internal abstract class Cliente : Conta, ICliente
    {
        protected Cliente(string agencia, string numero) : base(agencia, numero)
        {
        }

        public string ?Nome { get; set; }
        public Endereco ?Endereco { get; set; }

        public abstract void ResumoCliente();

    }
}
