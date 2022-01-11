const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Josué',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Rafaela',
        nota: 3,
        turma: '2c',
    },
];
function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i <arr.length; i++) {
        
        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5))