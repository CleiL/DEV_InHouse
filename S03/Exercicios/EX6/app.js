
function verificaPalindromoFor(texto) {
    // ana, radar, osso
    const meio = texto.length / 2;
    const fim = texto.length - 1;
    
    for (let i = 0; i < meio; i++) {
        if (texto[i] !== texto[fim - i]) {
        return false;     }
    }

    return true;
}

//redução para arrow function com spread, reverse e join
const verificaPalindromo = texto => [...texto].reverse().join('') === texto;


const teste0 = verificaPalindromo("osso");
console.log(teste0);
// true

const teste1 = verificaPalindromo("ana");
console.log(teste1);
// true
const teste2 = verificaPalindromo("julia");
console.log(teste2);
console.log("---");

const teste00 = verificaPalindromoFor("osso");
console.log(teste0);
// true

const teste01 = verificaPalindromoFor("ana");
console.log(teste1);
// true
const teste02 = verificaPalindromoFor("julia");
console.log(teste2);