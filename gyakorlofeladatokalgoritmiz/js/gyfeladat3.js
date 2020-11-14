const array = [5432, 45, 36, 3589, 11672, 872, 4];
function calculate(array) {
    let sum = 0;
    let count = array.length;
    for (let i = 0; i < count; i++) {

      sum = sum + (array[i]); 
    
    return sum / count;
    }
    
}
console.log(calculate (array))


        