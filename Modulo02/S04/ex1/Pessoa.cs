using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExercicioPessoa
{
    public class Pessoa
    {
        private string Nome;
        protected int Idade;
        string Endereco;

        public Pessoa (string nome, int idade, string endereco)
        {
            this.nome = Nome;
            this.idade = Idade;
            this.endereco = Enderaco;
        }

        public void Saudacao()
        {
            Console.WriteLine($"Olá, meu nome é {nome} e eu tenhi {idade} anos.");
        }
    }
}
