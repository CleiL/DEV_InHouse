using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculadoraPI
{
        public static class Calculadora
    {
        public const double Pi = 3.14159265359;

        public static double Soma(double a, double b)
        {
            return a + b;
        }

        public static double Subtracao(double a, double b)
        {
            return a - b;
        }

        public static double Multiplicacao(double a, double b)
        {
            return a * b;
        }

        public static double Divisao(double a, double b)
        {
            return a / b;
        }
    }

}