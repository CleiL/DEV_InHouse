namespace NerdinBank.Classes
{
    internal class Corrente : Conta
        //Corrente hera Conta - HERANÇA
    {
        public double Limite { get; set; }

        public Corrente(string agencia, string numero, double saldo) : base(agencia, numero)
        {
        }

        public override bool Sacar(double valor)
        {
            throw new NotImplementedException();
        }
    }
}
