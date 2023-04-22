using System;
using System.Collections.Generic;

namespace Exercicio
{
    public class Proprietario
    {
        public string Nome {get; set;}
        public string CPF {get; set;}
        public string Telefone {get; set;}

        //Constructor da classe Proprietario
        public Proprietario(string nome, string cpf, string telefone)
    {
        Nome = nome;
        CPF = cpf;
        Telefone = telefone;
    }
}

    public class Carro
    {
        public string Marca { get; set;}
        public string Modelo { get; set;}
        public string Placa { get; set;}
        public string Cor { get; set;}
        public Proprietario Proprietario { get; set;}

        // Constructor da classe carro
        public Carro(string marca, string modelo, string placa, string cor, Proprietario proprietario)
        {
            Marca = marca;
            Modelo = modelo;
            Placa = placa;
            Cor = cor;
            Proprietario = proprietario;
        }

        public override string ToString()
        {
            return $"Marca: {Marca}\nModelo: {Modelo}\nPlaca: {Placa}\nCor: {Cor}\nProprietario: {Proprietario.Nome} - CPF: {Proprietario.CPF} - Telefone: {Proprietario.Telefone}\n";
        }        
    }
    class Program
    {
        static void Main(string[] args)
        {
            // List<Proprietario> proprietarios = new List<Proprietario>();
            // proprietarios.Add(new Proprietario("Clei Santos","123.456.789-85","(11)99999-9999"));
            // proprietarios.Add(new Proprietario("Pamela Franco","123.456.789-85","(11)88888-8888"));
            // proprietarios.Add(new Proprietario("Sophia Fronco","123.456.789-85","(11)77777-8888"));

            // List<Carro> carros = new List<Carro>();
            // carros.Add(new Carro("Fiat", "Palio", "ABD-1234", "Amarelo", proprietarios[0]));
            // carros.Add(new Carro("Volkswagen", "Gol", "DEF-5678", "Preto", proprietarios[1]));
            // carros.Add(new Carro("Chevrolet", "Onix", "GHI-9012", "Vermelho", proprietarios[2]));


            // foreach (Carro carro in carros)
            // {
            //     Console.WriteLine($"Marca: {carro.Marca}");
            //     Console.WriteLine($"Modelo: {carro.Modelo}");
            //     Console.WriteLine($"Placa: {carro.Placa}");
            //     Console.WriteLine($"Cor: {carro.Cor}");
            //     Console.WriteLine($"Proprietario: {carro.Proprietario.Nome} - CPF: {carro.Proprietario.CPF} - Telefone: {carro.Proprietario.Telefone}");
            //     Console.WriteLine();
            // }

            List<Carro> carros = new List<Carro>();
            while (true)
            {
                Console.WriteLine("Selecione um opção:");
                Console.WriteLine("1 - Cadastrar um novo carro:");
                Console.WriteLine("2 - Listar carros cadastrados:");
                Console.WriteLine("0 - Sair");

                string opcao = Console.ReadLine();

                switch (opcao)
                {
                    case "1":
                        Console.WriteLine("Digite os dados do proprietário:");
                        Console.Write("Nome: ");
                        string nome = Console.ReadLine();
                        Console.Write("CPF: ");
                        string cpf = Console.ReadLine();
                        Console.Write("Telefone: ");
                        string telefone = Console.ReadLine();
                        Proprietario proprietario = new Proprietario(nome, cpf, telefone);


                        Console.WriteLine("\nDigite os dados do veículos:");
                        Console.Write("Marca: ");
                        string marca = Console.ReadLine();
                        Console.Write("Modelo: ");
                        string modelo = Console.ReadLine();
                        Console.Write("Placa: ");
                        string placa = Console.ReadLine();
                        Console.Write("Cor: ");
                        string cor = Console.ReadLine();
                        Carro novoCarro = new Carro(marca, modelo, placa, cor, proprietario);

                        carros.Add(novoCarro);
                        
                        Console.WriteLine("\nCarro cadastrado com sucesso!");
                        Console.Write("Deseja cadastrar outro carro? (s/n) ");
                        string responder = Console.ReadLine().ToLower();
                        if (responder != "s"){
                            break;
                        }
                        break;

                    case "2":
                        Console.WriteLine("\nLista de veiculos cadastrados:");
                        foreach (Carro carro in carros)
                        {
                            Console.WriteLine(carro.ToString());
                        }
                        break;

                    case "0":
                        Console.WriteLine("\nSaindo do programa ...");
                        return;

                    default:
                        Console.WriteLine("\nOpção inválida");
                        break;
                }
            }
        }
    }
}