console.log("Aula 4");

// EXEMPLO REST (declaração de função)

// function somaTudo(a, b, ...vetor) {
const somaTudo = (a, b, ...vetor) => {
  console.log({ a, b, vetor });
  let total = 0;

  for (let i = 0; i < vetor.length; i++) {
    total += vetor[i];
  }
  return total;
}
// Resultado é 18 pois 1 e 2 são destacados na linha 6
// const resultado = somaTudo(1, 2, 3, 4, 5, 6);
// console.log({ resultado });


// EXEMPLO SPREAD (PARAMETROS)
const vetorA = [1, 2, 3, 4];

function multiplicaTudo(a, b, c, d, e) {
  console.log({ a, b, c, d, e });
}
// multiplicaTudo(555,  ...vetorA, 999);

// EXEMPLO SPREAD (array)
const vetorB = [11, 22, ...vetorA, 33];

//console.log(vetorB);

// EXEMPLO concatenação de arrays com SPREAD
const vetorC = [...vetorB, ...vetorA];
//console.log(vetorC);


// EXEMPLO SPREAD (objeto)
const objA = { a: 1, b: 2, c: 3 };
// dependendo da ordem em que chaves iguais
// forem acrescentadas as últimas tem prioridade
const objB = { b: 44, ...objA, c: 55, d: 66 };
// console.log(objB);


// EXEMPLO DESTRUCTURING (array)
const vetorD = ["Romeu", 30, "Programador", "Mentor"];

const [batata, arroz, ...feijao] = vetorD;
//console.log({ batata, arroz, feijao });


// EXEMPLO DESTRUCTURING (array/parametro)
function coordenadas([x, ...r], extra) {
  console.log({ x, r, extra });
}

const ponto = [1, 2, 3]
//coordenadas(ponto, false);

// EXEMPLO DESTRUCTURING (object)
const objetoC = {
  nome: "Romeu",
  idade: 30,
  ocupacao: ["Programador", "Mentor"]
};

const { nome, ...info } = objetoC;

//console.log({ nome, info });

function exibePessoa(props) {
  const { nome, idade, ocupacao } = props;

  console.log(nome, idade, ocupacao);
}

//exibePessoa(objetoC)


// Exemplo destruct e map
const multiplicar = (multip, ...numeros) => {
  console.log({ numeros });
  return numeros.map((n) => {
    return multip * n;
  });
}


// chamada da função
const resultado = multiplicar(2, 4, 3, 1, 8);
// [8, 6, 2, 16]

console.log(resultado);


const [...r] = "teste";

console.log({ r });