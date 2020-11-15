
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr
}
function findNumber(arr, n, sorted = false) {
    if (arr.length === 1) {
        if (arr[0] === n) {
            return true;
        }
        return false;
        
    }
    let sortedArray = arr;
    if (!sorted) {
        sortedArray = bubbleSort(arr);
    }
    
    halfArrIndex = arr.length % 2 === 0 ? arr.length / 2 - 1 : (arr.length - 1) / 2;
   
    if (sortedArray[halfArrIndex] < n) {
        return findNumber(sortedArray.slice(halfArrIndex + 1), n, true);
    }
    if (sortedArray[halfArrIndex] > n) {
        return findNumber(sortedArray.slice(0, halfArrIndex), n, true);
    }
    return true;
}


const sampleArray = [5432, 45, 36, 3589, 11672, 23, 872, 4];
console.log(findNumber(sampleArray, 23));