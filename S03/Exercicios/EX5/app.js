/*
function somaTudo(...somar) {
    let total = 0;
    /*for(let i = 0; i < somar.length; i++){
        total += somar[i];}
    return total
    
    */
/* 
    somar.forEach(num => {
        total += num
    });
    return total
}
*/
const somaTudo = (...somar) => {
    let total = 0;
    
    somar.forEach(num => {
        total += num
    });
    return total
}
const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10