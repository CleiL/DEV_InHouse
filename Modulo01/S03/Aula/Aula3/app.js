// Impede o uso de variáveis que não existem
// "use strict";
// Automaticamente presente em script do tipo módulo

// Escopo Global
var minhaVariavel = "ConteudoDaVariavel";

function funcaoExemplo() {
  // Escopo de Função
  var varEscopoFunc = "NoEscopoDaFuncao";
}

if (minhaVariavel) {
  // Escopo de Bloco
  var varEscopoBloco = "NoEscopoDoBloco";
}


// Exemplo VAR em escopo de função
function definirLargura() {
  var largura = 100;
  console.log(largura);
}
//definirLargura();
//console.log(largura);


// Exemplo VAR em escopo de bloco
var altura = 100;
if (altura > 90) {
  var largura = 100;
  //console.log(largura);
}
//console.log(largura);


// Exemplo LET escopo de bloco
let pontos = 50;
let venceu = false;

if (pontos > 40) {
  //console.log('Passei pelo if!');
  let venceu = true;
}
//console.log('Venceu:', venceu);
// Venceu: false

// Exemplo CONST
const pessoa = {
  nome: 'Vitória',
  idade: 31
};

// O que vai acontecer nas ocasiões abaixo?
// pessoa = { nome: 'Chinforínfola' };

pessoa.peso = 40;

console.log(pessoa);

// Como impedir que propriedades sejam alteradas?
const vitoria = Object.freeze(pessoa);

const texto = ["blablabla"];
texto[0] = "batata";
//console.log(texto);
texto[1] = "couve";
//console.log(texto);

const numero = [45];
numero[0] = 33;


// function pegaPrompt() {
//   const digitado = prompt("Digite algo:");
//   console.log(digitado);
// }
// pegaPrompt();
// pegaPrompt();
// pegaPrompt();

const lista = [4, 5, 2, 77, 8];
let max = 0;
for (let i = 0; i < lista.length; i++) {
  const num = lista[i];
  if (num > max) {
    max = num;
  }
}
//console.log(max);

// Exemplo de criação de variável global
window.minhaVariavelGlobal = "teste";
//console.log(minhaVariavelGlobal);


// Exemplo HOISTING de VAR
console.log(numA); // undefined
var numA;
numA = 6;

numB = 12;
console.log(numB); // 12
var numB;

// Exemplo HOISTING de FUNCTION
dahOi();
function dahOi() {
  console.log("Oi!");
}


// Exemplo exercício
// testa se termo existe em texto
function procuraTermo(parametros) {
  const texto = parametros.texto;
  const termo = parametros.termo;

  return texto.includes(termo);
}

const testeA = procuraTermo({
  texto: "O rato roeu a roupa do rei de Roma.",
  termo: "rato"
}); // Deve retornar: true

const testeB = procuraTermo({
  texto: "O rato roeu a roupa do rei de Roma.",
  termo: "batata"
}); // Deve retornar: false

console.log({ testeA, testeB })
