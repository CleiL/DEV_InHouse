//Em um arquivo app.js (incluído em index.html) 
//faça o seguinte:
//No documento js faça uma arrow function para retornar 
//uma mensagem (string) de "Olá, Mundo!".
//Armazene esta arrow function em uma constante (const) 
//de nome mensagemOla.
//Chame a função mensagemOla e exiba o 
//retorno desta função no console.
//Ajuste a função mensagemOla para que receba 
//um parâmetro nome e retorne a mensagem "Olá, [nome]!".

const entradaNome = document.getElementById('nome');
const  btnAcao = document.getElementById('btn-acao');
const msg = document.getElementById('mensagem')




//const _mensagemOla = (nome) =>{
//    return `Olá, ${nome}!`;
//};


//omitindo chaves e return statement
const mensagemOla = nome => `Olá, ${nome}!`;
const resultado = mensagemOla("Clei");

console.log(resultado);

//btnAcao.onclick =  () =>{
//    console.log(('clicou'));
//};

btnAcao.addEventListener('click', () => {
    const nome = entradaNome.value;
    const msg = mensagemOla(nome);
    console.log(msg);
});

btnAcao.addEventListener('click', () => {
    const nome = entradaNome.value;
    const msg = mensagemOla(nome);
    console.log(msg);

});

