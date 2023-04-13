
var numero = parseInt(prompt('Informe o número'));
var raiz = parseInt(prompt('Informe a raiz'));

var soma = numero;
var resultado = numero.toString();

for (var i = 0; i < 9; i++) {
  soma += raiz;
  resultado += ', ' + soma;
}

alert('A PA é: ' + resultado);

/*-----------------------------------------------------------------------------------------------*/
// Refatoração

function calcularPA() {
  const primeiroNumero = parseInt(prompt('Informe o primeiro número'));
  const razao = parseInt(prompt('Informe a razão'));

  let soma = primeiroNumero;
  let resultado = primeiroNumero.toString();

  for (let i = 0; i < 9; i++) {
    soma += razao;
    resultado += `, ${soma}`;
  }

  alert(`A PA é: ${resultado}`);
}

calcularPA();


//
function calcularPA() {
  let primeiroNumero, razao;

  do {
    primeiroNumero = parseInt(prompt('Informe o primeiro número'));

    if (isNaN(primeiroNumero)) {
      alert('Valor inválido para o primeiro número. Tente novamente.');
    }
  } while (isNaN(primeiroNumero));

  do {
    razao = parseInt(prompt('Informe a razão'));

    if (isNaN(razao)) {
      alert('Valor inválido para a razão. Tente novamente.');
    }
  } while (isNaN(razao));

  let soma = primeiroNumero;
  let resultado = primeiroNumero.toString();

  for (let i = 0; i < 9; i++) {
    soma += razao;
    resultado += `, ${soma}`;
  }

  alert(`A PA é: ${resultado}`);
}

calcularPA();
