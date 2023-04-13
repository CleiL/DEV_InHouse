
// Exemplo inserção e remoção ao final do array
/*
const vetorExemplo = [];
vetorExemplo.push(1);
vetorExemplo.push('a');
vetorExemplo.push('ultimo');
const ultimo = vetorExemplo.pop();
console.log(vetorExemplo, ultimo);
*/

// FUNÇÕES

// Exemplo com matemática
// f(x, y) = x * 2 + y
// f(2, 3) = 2 * 2 + 3

function f(x, y) {
  return x * 2 + y;
}

function funcaoExemplo(x, y) {
  // Exemplo de verificação de parâmetros
  if (typeof x !== 'number' || typeof y !== 'number') {
    // caso algum dos parametros não forem numeros
    // interrompo a execução e retorno undefined
    return;
  }

  return x * 2 + y;
}

const resultadoA = funcaoExemplo(2);
const resultadoB = funcaoExemplo(5, 8);

//console.log(resultadoA);
//console.log(resultadoB);

// Função sem parâmetros nem retorno
/*
function dahOi() {
  //...
  console.log("Oi!");
}
dahOi();
*/

// Exemplo com parâmetros e string
function olaNome(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}
const texto = olaNome('Bolacha', 33);
// console.log(texto);

// Função anônima imediatamente executada
/*
(function () {
  console.log(`Sou uma função anônima!`);
})();
*/

// Função anônima atribuída a uma variável
const variavelComFuncao = function (n) {
  console.log(`Funciono mesmo em uma variável ${n}!`);
};
//variavelComFuncao(6666);

// ARROW FUNCTION

// Arrow function completa
const vArrowCompleta = (n) => {
  console.log(`Arrow completa ${n}!`);
};

// Caso apenas um parametro podemos omitir os parentesis
const vArrowSemParentesis = n => {
  console.log(`Arrow sem parentesis ${n}!`);
};

// Caso apenas uma expressão no corpo podemos
// omitir inclusive as chaves do bloco de funcao
const vArrowSemChaves = n => 
  console.log(`Arrow sem parentesis ${n}!`);


// COMPARANDO FUNÇÕES
// funcao comum
function fComum(x) {
  return x * 10000;
}
// arrow function completa
const fArrowC = (x) => {
  return x * 10000;
}
// arrow function sem parentesis
const fArrowP = x => {
  return x * 10000;
}
// arrow function sem chaves 
const fArrow = x => x * 10000;

const rC = fComum(3);
const rA = fArrow(6);
//console.log(rC);
// console.log(rA);


// Exemplo de diferenças de contexto this
const objeto = {
  nome: "Teste",
  nomeDaFuncao: function () {
    // este this é o objeto
    console.log(this);
    console.log(window === this);
  },
  nomeDaArrow: () => {
    // este this é o contexto global window
    console.log(this);
    console.log(window === this);
  }
};
//objeto.nomeDaFuncao();
//objeto.nomeDaArrow();

const vetorB = ['A', 'B', 'C'];

console.log(vetorB);

for (let i = 0; i < vetorB.length; i++) {
  console.log(`i: ${i} v: ${vetorB[i]}`);
}

// exemplo de funcao comum como parametro
vetorB.forEach(function (valor) {
  console.log(`v: ${valor}`);
});

// exemplo de arrow function como parametro
vetorB.forEach(valor => console.log(`v: ${valor}`));


function calculaPontoA(x, y, z) {
  return [x * 2, y * 2, z * 2];
}

const calculaPontoB = (x, y, z) => [x * 2, y * 2, z * 2];

console.log(calculaPontoB(1, 2, 3));