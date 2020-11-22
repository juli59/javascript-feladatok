function bubbleSortDesc(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr
}

const arr = [435, false, -567, 'hello', 33, true, 99, 67.1,'szia'];
function filterByNumbers(arr) {
    const numbers = [];
    for (let i = 0; i< arr.length; i += 1) {
        if(typeof arr[i] === 'number') {
            numbers.push(arr[i])
        }
    } return numbers;
}

function filterByNotNumbers(arr) {
    const notNumbers = [];
    for (let i = 0; i< arr.length; i += 1) {
        if(typeof arr[i] !== 'number') {
            notNumbers.push(arr[i])
        }
    } return notNumbers;
}

function customSorting(arr) {
    const numbers = filterByNumbers(arr);
    const notNumbers = filterByNotNumbers(arr);
    const sortedArr = bubbleSortDesc(numbers)
    return sortedArr.concat(notNumbers);
}
console.log(customSorting(arr))