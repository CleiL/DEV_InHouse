namespace NerdinBank.Classes
{
    internal class Poupanca : Conta
        // Poupanca herda Conta - HERANÇA
    {
        public int Aniversario { get; private set; }
        public Poupanca(string agencia, string numero, int aniversario) : base(agencia, numero)
        {
            setAniversario(aniversario);
        }
        private void setAniversario(int aniversario)
        {
            Aniversario = aniversario;
        }
        public override bool Sacar(double valor)
        {
            if(valor <= Saldo) 
            {
                setSaldo(Saldo - valor);
                return true;
            }
            else { return false; }
        }
        public string ToString()
        {
            string texto = base.ToString();
            texto += "\nAniversario: " + Aniversario;
            return texto;
        }
    }
}
