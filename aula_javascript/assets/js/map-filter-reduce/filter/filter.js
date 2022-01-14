
// filtrar numeros pares

function filtraPares(arr){
    return arr.filter(callBack)

}

function callBack(item){
    return item % 2 === 0;
}


const meuArray = [1,2,3,4,5,6,7,8,9];

console.log(filtraPares(meuArray));