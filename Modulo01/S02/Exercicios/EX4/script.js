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

//

let soma = 0;
let numero;

while (true) {
  numero = prompt('Digite os números que deseja somar, digite -1 para encerrar');
  
  if (numero === null) {
    break;
  }
  
  numero = parseInt(numero);
  
  if (isNaN(numero) || numero === -1) {
    continue;
  }
  
  soma += numero;
}

alert(soma);

//
let soma = 0;

while (true) {
  let input = prompt('Digite um número para somar, ou -1 para encerrar:');
  
  if (input === null) {
    break;
  }
  
  let numero = parseInt(input);
  
  if (isNaN(numero) || numero === -1) {
    continue;
  }
  
  soma += numero;
}

alert(`A soma dos números digitados é: ${soma}`);