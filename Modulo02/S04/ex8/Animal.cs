using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Animais
{
    public abstract class Animal
    {
        public string Nome { get; set; }
        public int Idade { get; set; }

        public abstract void EmitirSom();
    }
}