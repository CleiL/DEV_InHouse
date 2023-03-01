
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