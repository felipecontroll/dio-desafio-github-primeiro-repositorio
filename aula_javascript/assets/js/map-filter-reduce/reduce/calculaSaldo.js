const list = [
    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'tolha',
        preco: 30,
    },
] 
    const  saldoDisponivel = 100;

    function calculaSaldo(saldoDisponivel,list){
        return list.reduce(function(prev,current,index){
            console.log('rodada', index + 1);
            console.log({prev});
            console.log({current});
            return prev - current.preco;
        },saldoDisponivel);
    }

    console.log(calculaSaldo(saldoDisponivel,list));

