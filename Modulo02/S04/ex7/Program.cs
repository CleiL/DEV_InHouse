using System;
using ex7;

var minhaConta = new ContaBancaria(12345);

minhaConta.Depositar(1000);
Console.WriteLine($"Saldo atual: {minhaConta.Saldo}"); // Saída: Saldo atual: 1000

minhaConta.Sacar(500);
Console.WriteLine($"Saldo atual: {minhaConta.Saldo}"); // Saída: Saldo atual: 500
