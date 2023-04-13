using System;

namespace InformacoesCarro
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite a marca do carro:");
            string marca = Console.ReadLine(); // Lê a marca do carro digitada pelo usuário

            Console.WriteLine("Digite o modelo do carro:");
            string modelo = Console.ReadLine(); // Lê o modelo do carro digitado pelo usuário

            Console.WriteLine("Digite a quilometragem rodada do carro:");
            int kmRodados = Convert.ToInt32(Console.ReadLine()); // Lê a quilometragem rodada do carro digitada pelo usuário

            Console.WriteLine("Marca do carro: " + marca);
            Console.WriteLine("Modelo do carro: " + modelo);
            Console.WriteLine("Quilometragem rodada do carro: " + kmRodados + " km");

            // Verifica se é necessário fazer revisão (quilometragem acima de 10.000 km)
            if (kmRodados > 10000)
            {
                Console.WriteLine("É necessário fazer uma revisão.");
            }
        }
    }
}
