// função trocar cor ao clicar
function cliqueBotao() { 
    const titulo = document.getElementById('titulo')
    titulo.style.color = 'red';
}

// cria e  add evento click
const botao = document.createElement('button')
botao.innerText = 'botao 2';
botao.onclick = cliqueBotao; // com parenteses ele já executa a função
//add elemento criado no DOM
document.body.appendChild(botao)


const link = document.createElement('a')
link.href = 
'https://docs.google.com/presentation/d/1RFmyRWee3qldFjjT9ZXF3zn3Qxs8IQBBTlZoEvpOuJU/edit#slide=id.g1daf17a1622_0_54'

link.innerText = 'link';
document.body.appendChild(link)

//Função p/ simular a busca de um CEP

const buscaCep = (Event) => {
    console.log(Event.target.value);
}

//Input para evento onblur
const inputCep = document.createElement('input')
inputCep.onblur = buscaCep
inputCep.placeholder = 'digite o cep'
document.body.appendChild(inputCep)

//Evento teclado
const inputKey = document.createElement('input')
inputKey.onkeyup = (Event) => {
    console.log(Event);
};
document.body.appendChild(inputKey)

//prevent defaul
//onsubmit

//Evento de formulario
const cadastros = [];
const fomrCadastro = document.getElementById('cadastro');
fomrCadastro.onsubmit = (Event) => {
    Event.preventDefault();

    //document.getElementBId('nome')
    const nome = Event.target.nome.value;
    const idade = Event.target.idade.value;

    //lista p/ add na lista
    const item = document.createElement('li');
    //item.classList.add('listItem');
    item.innerText = `${nome} - ${idade}`;

    //aplicando e removendo style do css ao clicar no texto
    item.onclick = function () {
        if (this.classList.contains('listItem')) {
            this.classList.remove('listItem');
        } else {
            this.classList.add('listItem');
        }
    }

    //add o list item criado na lista no DOM
    const lista = document.getElementById('lista');
    lista.appendChild(item);

    console.log(nome, idade);
};


const criaH1 = () => {
    const h1 = document.
 })
//add event listener

const buttonL = document.createElement('button')
buttonL.innerText = 'remove Listner';
buttonL.removeEventListener('click', criaH1);
document.body.appendChild(buttonL)