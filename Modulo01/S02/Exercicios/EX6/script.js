var operacao = prompt('Selecione a operação (+,-,*,/)');
var num1 = parseFloat(prompt('Num 1'));
var num2 = parseFloat(prompt('Num 2'));

switch (operacao) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  default:
    alert('Operação inválida');
}
/* -------------------------------------------------------------------------------------------------*/

// refatoração
function calcular(operacao, num1, num2) {
  let resultado;
  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      throw new Error('Operação inválida');
  }
  return resultado;
}

function obterNumero(promptTexto) {
  let numero;
  do {
    numero = parseFloat(prompt(promptTexto));
  } while (isNaN(numero));
  return numero;
}

try {
  const operacao = prompt('Selecione a operação (+,-,*,/)');
  const num1 = obterNumero('Digite o número 1:');
  const num2 = obterNumero('Digite o número 2:');
  const resultado = calcular(operacao, num1, num2);
  alert(`O resultado é: ${resultado}`);
} catch (error) {
  alert(error.message);
}


// Refatoração
function calculate(operation, num1, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Operação inválida');
  }
}

function getNumberInput(promptText) {
  while (true) {
    const input = prompt(promptText);
    const number = parseFloat(input);
    if (!isNaN(number)) {
      return number;
    }
    alert('Entrada inválida. Tente novamente.');
  }
}

try {
  const operation = prompt('Selecione a operação (+,-,*,/)');
  const num1 = getNumberInput('Digite o número 1:');
  const num2 = getNumberInput('Digite o número 2:');
  const result = calculate(operation, num1, num2);
  alert(`O resultado é: ${result}`);
} catch (error) {
  alert(error.message);
}

