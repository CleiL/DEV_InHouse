var numero = parseInt(prompt('Informe o número da tabuada.'));

  // isNaN utilizado para se não for número, avisar com o alert
  if (isNaN(numero)) {
    alert('Número inválido');
  } else {
    var resultado = '';

    for (var i = 0; i <= 10; i++) {
      resultado += numero + ' x ' + i + ' = ' + numero * i + '\n';
      // resultado += `${numero} x ${i} = ${numero * i} \n`;
    }
    alert(resultado);
  }

  // código refatorado
  const numero = parseInt(prompt('Informe o número da tabuada.'));

  if (isNaN(numero)) {
    alert('Número inválido');
  } else {
    let resultado = '';
  
    for (let i = 0; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
  }
