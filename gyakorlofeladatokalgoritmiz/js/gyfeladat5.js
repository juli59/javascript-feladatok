const array = [5432, 45, 36, 3589, 11672, 872, 4];
/*function calculateEvenElements(array) {
let evenNumber = 0;
let count = array.length;
    for (let i = 0; i < count; i++) {
        if (array[i] % 2 === 0) {
             evenNumber++;
            
            }
        }
        return evenNumber;
}
console.log(calculateEvenElements(array));*/

function evenNumber(array) {
    let evenNum = 0;
    for ( let i = 0; i < array.length; i += 1 ) {
        if (array[i] % 2 === 0 ) {
            evenNum += 1
        }
    } return evenNum;
}
console.log(evenNumber(array));

