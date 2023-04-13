var numero = parseInt(prompt('Digite um número:'));

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  var pares = 0;
  var impares = 0;
  for (var i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += 1;
    } else {
      impares += 1;
    }
  }

  alert('Existem ' + pares + ' números pares e ' + impares + ' números ímpares');
}

// refatoração
var numero = parseInt(prompt('Digite um número:'));

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  var pares = 0;
  for (var i = 0; i <= numero; i += 2) {
    pares += 1;
  }

  var impares = numero - pares;

  alert('Existem ' + pares + ' números pares e ' + impares + ' números ímpares');
}

// refatoração
const numero = parseInt(prompt('Digite um número:'));

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i <= numero; i++) {
    i % 2 === 0 ? pares++ : impares++; //operador ternario
  }

  alert(`Existem ${pares} números pares e ${impares} números ímpares`); //template literal
}

// refatoração
// Utilizei let em vez de var para declarar as variáveis, que é a forma mais moderna de declarar variáveis em JavaScript.
let numero = parseInt(prompt('Digite um número:'));

// Utilizei a função Number.isNaN em vez de isNaN, que é uma forma mais segura de verificar se um valor é NaN.
if (Number.isNaN(numero)) {
  alert('Número inválido');
} else {
  let pares = 0;
  let impares = 0;
  
  // Iniciei o loop em 1, já que o enunciado pede para contar a partir de 1 e não de 0.
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += 1;
    } else {
      impares += 1;
    }
  }

  alert('Existem ' + pares + ' números pares e ' + impares + ' números ímpares');
}
