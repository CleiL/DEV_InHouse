const temporizador = () => {
    const interval = setInterval(()=> {
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleTimeString('pt-BR')

        console.log(dataFormatada);
    },1000);

    setTimeout(()=> {
        clearInterval(interval);
    }, 1000)
};
temporizador();