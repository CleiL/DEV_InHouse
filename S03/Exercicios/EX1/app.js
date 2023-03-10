//Em um arquivo app.js incluído em index.html:
//Implemente uma função "procuraMinMax" que receba 
//como parâmetro um array (numérico) e 
//identifique o menor e o maior valor do mesmo.
//Imprima no console estes valores ou 
//"Não é possível encontrar" quando não for possível.

function procuraMinMax (numeros) {
        //caso seja um array e numeros seja maior que zero   
    if(Array.isArray(numeros) && numeros.length > 0) {
        let maior = numeros[0];
        let menor = numeros[0];

        for (let i = 1; i < numeros.length; i++ ){
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
        console.log(`Maior: ${maior} | Menor: ${menor}`);
    } else {
        console.log("Não é possível encontrar");
    }
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax (null);
procuraMinMax([-2,-2,-2,-2]);
procuraMinMax([20,10, 30]);

console.log("---");
console.log("---");

const procuraMinMaxx = (numeros) => {  
if(Array.isArray(numeros) && numeros.length > 0) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++ ){
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    console.log(`Maior: ${maior} | Menor: ${menor}`);
} else {
    console.log("Não é possível encontrar");
}
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax (null);
procuraMinMax([-2,-2,-2,-2]);
procuraMinMax([20,10, 30]);

/*-------------------------------------------------------------------------------------------------------*/
// Refatoração

    function procuraMinMax(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
        return console.log("Não é possível encontrar");
        }
    
        let maior = numeros[0];
        let menor = numeros[0];
    
        for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        }
        console.log(`Maior: ${maior} | Menor: ${menor}`);
    }
    
    procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
    procuraMinMax([]);
    procuraMinMax([1]);
    procuraMinMax([1, -1]);
    procuraMinMax(null);
    procuraMinMax([-2, -2, -2, -2]);
    procuraMinMax([20, 10, 30]);
    
