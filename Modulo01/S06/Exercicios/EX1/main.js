function sleep(valor) {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(valor);
        }, 3000);
    });
};
sleep('valor').then((res) => {
    console.log(res)
})

/*---------------------------------------------------*/
//Refatoração
const sleep = (valor) => new Promise(resolve => setTimeout(() => resolve(valor), 3000));

sleep('valor').then(console.log);
