/*const array = [5432, 45, 36, 3589, 11672, 872, 4];
function calculate(array) {
    let sum = 0;
    let count = array.length;
    for (let i = 0; i < count; i++) {

      sum = sum + (array[i]); 
    
    return sum / count;
    }
    
}
console.log(calculate (array))*/

const arr = [5432, 45, 36, 3589, 11672, 872, 4];
function getSum(arr) {
  let sumAver = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumAver += arr[i];
  
  } return sumAver;
}
console.log(getSum(arr));

function getAver(arr) {
  return getSum(arr) / arr.length;
}
console.log(getAver(arr));

        