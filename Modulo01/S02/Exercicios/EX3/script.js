// exibe a tabela de multiplicação desse número de 0 a 10

var numero = parseInt(prompt('Informe o número da tabuada.'));
  // isNaN utilizado para se não for número, avisar com o alert
  if (isNaN(numero)) {
    alert('Número inválido');
    // A linha if (isNaN(numero)) verifica se o valor digitado pelo usuário não é um número válido usando a função isNaN(). Se essa condição for verdadeira, significa que o número é inválido, ou seja, não é um número numérico. Nesse caso, é exibida uma mensagem de alerta "Número inválido" por meio da função alert().
  } else {
    var resultado = '';
    // Se a condição anterior for falsa, o código continua executando o bloco else. Dentro desse bloco, uma variável chamada resultado é declarada e inicializada com uma string vazia.

    for (var i = 0; i <= 10; i++) {
      resultado += numero + ' x ' + i + ' = ' + numero * i + '\n';
      // resultado += `${numero} x ${i} = ${numero * i} \n`;

      // Em seguida, é utilizado um loop for para iterar de 0 a 10. A variável i é usada como contador para controlar as iterações do loop.
      // Dentro do loop, a cada iteração, a string resultado é atualizada concatenando o número digitado pelo usuário, o contador i, o sinal de multiplicação (x) e o resultado da multiplicação do número pelo contador. O operador += é utilizado para adicionar cada linha à string resultado
    }
    alert(resultado);
  }

  // código refatorado
  const numero = parseInt(prompt('Informe o número da tabuada.'));

  if (isNaN(numero)) {
    alert('Número inválido');

//     A linha const numero = parseInt(prompt('Informe o número da tabuada.')); declara uma constante chamada "numero" e atribui a ela o valor digitado pelo usuário na janela de diálogo que é exibida por meio da função prompt(). O valor é convertido para um número inteiro usando a função parseInt().

// A linha if (isNaN(numero)) verifica se o valor digitado pelo usuário não é um número válido usando a função isNaN(). Se essa condição for verdadeira, significa que o número é inválido, ou seja, não é um número numérico. Nesse caso, é exibida uma mensagem de alerta "Número inválido" por meio da função alert().
  } else {
    let resultado = '';

    // Se a condição anterior for falsa, o código continua executando o bloco else. Dentro desse bloco, uma variável chamada resultado é declarada usando let e inicializada com uma string vazia.
  
    for (let i = 0; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`; //INTERLPOLAÇÃO
    }
    alert(resultado);

//     Em seguida, é utilizado um loop for para iterar de 0 a 10. A variável i é declarada com let e usada como contador para controlar as iterações do loop.

// Dentro do loop, a cada iteração, a string resultado é atualizada usando template literals (interpolação de strings) para concatenar o número digitado pelo usuário, o contador i, o sinal de multiplicação (x) e o resultado da multiplicação do número pelo contador. Essa linha é adicionada à variável resultado.

// Após o loop ser concluído, a string resultado contém a tabela de multiplicação do número digitado. Uma janela de diálogo é exibida por meio da função alert(), mostrando a tabela completa.
  }
