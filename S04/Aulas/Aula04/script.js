const tarefas = [];

const formCadastro = document.getElementById('form-cadastro');
formCadastro.addEventListener('submit', (Event) =>{

    /*const tarefa = {
        id: new Date().getTime(),
        titulo: Event.target.titulo.value,
        prioridade: Event.target.prioridade.value,
        descricao: Event.target.descricao.value,
        concluida: false,
    };
    tarefas.push(tarefa);
    console.log(tarefas);*/
});

const listaTarefas = () => {
    const lista = document.getElementById('lista');

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const titulo = document.createElement('h3');
    titulo.classList.add('subtitle', 'text-center');
    titulo.innerText = '';

    const prioridade = document.createElement('p');
    prioridade.classList.add('text-center', 'priority', 'color-red');
    prioridade.innerText = '';

    const descricao = document.createElement('p');
    descricao.classList.add('description');

};