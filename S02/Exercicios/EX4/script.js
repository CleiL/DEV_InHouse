var soma = 0;
do {
  var numero = prompt('Digite os números que deseja somar, digite -1 para encerrar');
    if (numero === null) {
      break;
    }
  numero = parseInt(numero);
    if (isNaN(numero) || numero === -1) {
      continue;
    }
  soma += numero;
} while (numero !== -1);
alert(soma);