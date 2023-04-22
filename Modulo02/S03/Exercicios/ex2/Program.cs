using System;

class Program
{
    static void Main(string[] args)
    {
        int resultadoInt = Soma(4, 5);
        Console.WriteLine(resultadoInt);

        double resultadoDouble1 = Soma(2.5, 3.7);
        Console.WriteLine(resultadoDouble1);

        double resultadoDouble2 = Soma(1.0, 2.0, 3.0);
        Console.WriteLine(resultadoDouble2);
    }

    static int Soma(int a, int b)
    {
        return a + b;
    }

    static double Soma(double a, double b)
    {
        return a + b;
    }

    static double Soma(double a, double b, double c)
    {
        return a + b + c;
    }
}
