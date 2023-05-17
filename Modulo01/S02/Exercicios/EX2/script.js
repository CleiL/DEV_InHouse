
// è verificado a idade, e informado se é jovem, adulto ou idoso

var idade = parseInt(prompt("Informe a sua idade: ")); 

        if(idade >=0 && idade <= 15){
                alert("Jovem")
        } else if (idade >= 16 && idade <= 64) {
                alert("Adulto")
        } else if (idade >= 65) {
                alert("Idoso")
        } else {
                alert("valor inválido");
        }

// código refatorado
const idade = parseInt(prompt("Informe a sua idade: ")); 

if (isNaN(idade) || idade < 0) {
        alert("Idade inválida");
} else if (idade <= 15) {
        alert("Jovem");
} else if (idade <= 64) {
        alert("Adulto");
} else {
        alert("Idoso");
}

//refatorado
const idade = parseInt(prompt("Informe a sua idade: "));

// Number.isNaN() foi utilizado em vez de isNaN() para evitar comportamentos inesperados com valores que não são do tipo number;

if (Number.isNaN(idade) || idade < 0) {  
        alert("Idade inválida");
} else if (idade <= 15) {
        alert("Jovem");
} else if (idade <= 64) {
        alert("Adulto");
} else {
        alert("Idoso");
}


// A função isNaN() é utilizada para verificar se um valor não é um número válido (Not-a-Number). No código apresentado, a função isNaN(idade) é usada para verificar se o valor digitado pelo usuário não é um número válido.

// Isso é importante porque a função parseInt() utilizada anteriormente para converter o valor da idade para um número inteiro pode retornar NaN se o usuário não fornecer um número válido. Por exemplo, se o usuário digitar letras ou caracteres especiais em vez de um número, o resultado da conversão será NaN.

// Portanto, ao utilizar isNaN(idade), estamos verificando se o valor digitado pelo usuário não é um número válido. Se essa condição for verdadeira, significa que a idade é inválida e a mensagem "Idade inválida" é exibida para alertar o usuário sobre o erro.

// Em resumo, o isNaN() é usado para garantir que a idade seja um número válido antes de prosseguir com as comparações e exibir a mensagem correta com base na faixa etária.

// No código atualizado, foi utilizado `Number.isNaN()` em vez de `isNaN()` para verificar se o valor da idade não é um número válido. Vou explicar a diferença e o motivo de usar `Number.isNaN()`:

// A função `Number.isNaN()` é uma função estática do objeto Number em JavaScript, introduzida no ECMAScript 2015 (ES6). Ela verifica estritamente se um valor é `NaN` (Not-a-Number). Essa verificação é mais precisa do que a função global `isNaN()`.

// A principal diferença entre `Number.isNaN()` e `isNaN()` é como eles tratam valores que não são do tipo `number`. O `isNaN()` tenta converter o valor para um número antes de verificar se é `NaN`, enquanto o `Number.isNaN()` não realiza conversão e retorna `true` apenas se o valor for `NaN` e do tipo `number`.

// No contexto do código fornecido, é importante garantir que o valor da idade seja tanto um número quanto um número válido. Usar `Number.isNaN()` ajuda a evitar falsos positivos, garantindo que apenas valores do tipo `number` e `NaN` sejam considerados inválidos. Isso é especialmente útil quando você deseja rejeitar valores como strings, objetos e outros tipos não numéricos que podem ser convertidos para `NaN` pela função `parseInt()`.

// Portanto, ao utilizar `Number.isNaN(idade)`, estamos verificando se o valor da idade não é um número válido. Se essa condição for verdadeira, significa que a idade é inválida e a mensagem "Idade inválida" é exibida para alertar o usuário sobre o erro.

// Em resumo, o `Number.isNaN()` é utilizado para garantir que a idade seja um número válido e evitar falsas conversões e comparações indesejadas com outros tipos de dados.