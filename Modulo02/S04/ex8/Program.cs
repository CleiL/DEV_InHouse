using System;
using Animais;
using Cachorros;
using Gatos;

Cachorro cachorro = new Cachorro();
cachorro.Nome = "Rex";
cachorro.Idade = 3;
cachorro.EmitirSom(); // Saída: "Au au!"

Gato gato = new Gato();
gato.Nome = "Frajola";
gato.Idade = 2;
gato.EmitirSom(); // Saída: "Miau!"

