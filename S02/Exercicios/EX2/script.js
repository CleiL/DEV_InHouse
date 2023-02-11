
var idade = parseInt(prompt("Digite sua idade: "));
if(idade >=0 && idade <= 15){
        alert("Jovens")
} else if (idade >= 16 && idade <= 64) {
        alert("Adultos")
} else if (idade >= 65) {
        alert("Idosos")
} else {
        alert("valor inválido");
};