
var idade = parseInt(prompt("Informe a sua idade: ")); 

        if(idade >=0 && idade <= 15){
                alert("Joven")
        } else if (idade >= 16 && idade <= 64) {
                alert("Adulto")
        } else if (idade >= 65) {
                alert("Idoso")
        } else {
                alert("valor inválido");
        };