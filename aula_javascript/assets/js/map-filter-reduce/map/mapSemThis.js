// Map sem this

function arraySemThis(arr) {

    return arr.map(function(item) {
        return item * 2;
      });
}

const nums = [2,4,6,8,10];
console.log(arraySemThis(nums));