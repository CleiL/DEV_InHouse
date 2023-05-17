namespace NerdinBank.Classes
{
    internal abstract class Conta
    {
        public string? Agencia { get; private set; }
        public string? Numero { get; private set; }
        public double Saldo { get; set; }

        public Conta(string agencia, string numero, double saldo)
        {
            setAgencia(agencia);
            setNumero(numero);
            setSaldo(0);
        }

        protected Conta(string agencia, string numero)
        {
            Agencia = agencia;
            Numero = numero;
        }
        //public static string GerarNumero()
        //{
        //    Random random = new Random();
        //    string numero = random.Next(00000000, 99999999).ToString();
        //    string digito1 = random.Next(0, 9).ToString();
        //    string digito2 = random.Next(0, 9).ToString();
        //    return numero + "-" + digito1 + digito2;
        //}
        public void setAgencia(string agencia)
        {
            Agencia = "0001";
        }
        public void serNumro(string numero)
        {
            Numero = numero;
        }
        public void setSaldo(double saldo)
        {
            Saldo = saldo;
        }
        public abstract bool Sacar(double valor);

        public bool Depositar(double valor)
        {
            if (valor > 0)
            {
                Saldo += valor;
                return true;
            }
            else { return false; }
        }

        public string imprimir()
        {
            string texto = "Agencia: " + this.Agencia +
                           "\nConta: " + this.Numero +
                           "\nSaldo: " + this.Saldo;
            return texto;
        }
    }
}
