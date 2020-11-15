/* function findNumber(arr, n) {
    let contains = false;
    for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] === n) {
            contains = true;
        }

    }
    return contains;
} */
function findNumber(arr, n) {
    
    for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] === n) {
            return true;
        }

    }
    return false;
}
const sampleArray = [5432, 45, 36, 3589, 11672, 872, 4];
console.log(findNumber(sampleArray, 23));