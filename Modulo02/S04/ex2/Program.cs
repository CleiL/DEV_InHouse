
using System;
using ContaBanco;

ContaBancaria conta1 = new ContaBancaria(12345);

conta1.Depositar(1000);
Console.WriteLine("Saldo atual: " + conta1.getSaldo());

conta1.Sacar(500);
Console.WriteLine("Saldo atual: " + conta1.getSaldo());
