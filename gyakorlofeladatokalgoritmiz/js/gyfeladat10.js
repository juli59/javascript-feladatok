function findNumber(arr, n) {
    let contains = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === n) {
            contains = contains + 1;
        }
    }
    return contains;
}
    const sampleArray = [5432, 23, 45, 36, 3589, 11672, 872, 4, 23];
console.log(findNumber(sampleArray, 23));