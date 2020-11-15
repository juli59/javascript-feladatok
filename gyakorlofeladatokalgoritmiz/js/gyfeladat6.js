

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

function getNthMinElement(arr, nth) {
    const sortedArr = bubbleSort(arr);
    return sortedArr[nth-1];
}
const sampleArray = [5432, 45, 36, 3589, 11672, 872, 4];
console.log(getNthMinElement(sampleArray, 2));