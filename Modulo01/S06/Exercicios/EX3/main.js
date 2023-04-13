function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cliente.cpf === 11111111111)
            resolve(true);
        else 
            reject(false);
    });
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor)
            resolve(true);
        else 
            reject(false);
    });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovacaoCadastro, aprovacaoValor]).then(()=> {
    console.log('aporvado!');
}).catch(() => {
    console.log('reprovado!');
}).finally(()=> {
    console.log('fim do procesamento');
})
/*-------------------------------------------------------------------------------------*/
//Refatorar 

const aprovarDadosCadastrais = (cliente) => {
    return cliente.cpf === 11111111111 ? Promise.resolve(true) : Promise.reject(false);
};

const aprovarValorSolicitado = (cliente, valor) => {
    return cliente.margem >= valor ? Promise.resolve(true) : Promise.reject(false);
};

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };

Promise.all([
    aprovarDadosCadastrais(cliente),
    aprovarValorSolicitado(cliente, 300.0)
]).then(() => {
    console.log('aprovado!');
}).catch(() => {
    console.log('reprovado!');
}).finally(() => {
    console.log('fim do processamento');
});
