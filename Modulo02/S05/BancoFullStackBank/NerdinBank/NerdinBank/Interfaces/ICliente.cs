using NerdinBank.Classes;

namespace NerdinBank.Interfaces
{
    internal interface ICliente
    {
        Endereco? Endereco { get; set; }
        string? Nome { get; set; }
    }
}
