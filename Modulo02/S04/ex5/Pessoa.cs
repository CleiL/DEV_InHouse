using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ex5
{
    private string nome;
    private int idade;

    public string Nome
    {
        get { return nome; }
        set { nome = value; }
    }

    public int Idade
    {
        get { return idade; }
        set
        {
            if (value >= 0)
            {
                idade = value;
            }
        }
    }

    public void DefinirIdade(int novaIdade)
    {
        if (novaIdade >= 0)
        {
            idade = novaIdade;
        }
    }
}