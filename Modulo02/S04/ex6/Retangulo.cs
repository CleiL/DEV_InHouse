using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ex6
{
    public class Retangulo
    {
        private double largura;
    private double altura;

    public double Largura
    {
        get { return largura; }
        set
        {
            if (value > 0)
            {
                largura = value;
            }
        }
    }

    public double Altura
    {
        get { return altura; }
        set
        {
            if (value > 0)
            {
                altura = value;
            }
        }
    }

    public double CalcularArea()
    {
        return largura * altura;
    }
    
    }
}