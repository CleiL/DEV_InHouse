using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Clientes
{
    public class Cliente
    {
        private string nome;
    private string cpf;

    public Cliente(string nome, string cpf) 
    {
        this.nome = nome;
        this.cpf = cpf;
    }

    public string Nome 
    {
        get { return nome; }
    }

    public string Cpf {
        get { return cpf; }
    }

    public override string ToString() 
    {
        return $"Nome: {nome}\nCPF: {cpf}";
    }
    }
}