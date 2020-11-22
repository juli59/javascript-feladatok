

/*function bubbleSort(arr) {
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
console.log(getNthMinElement(sampleArray, 2));*/
         
   /*const arr = [1, 5, 9, -10, 67];
    function bubbleSort(arr) {
        let swapped;
        do{
            swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;

    }
    function getNthMinElement(arr, nth) {
        const sortedArr = bubbleSort(arr);
        return sortedArr[nth-1];
    }
    console.log(getNthMinElement(arr, 2));*/

    const secondArr = [3, 5, 87, -11, 99];
    function bubbleSort(secondArr){
        
        let swapped;
            do{
                swapped = false;
                for(let i = 0; i < secondArr.length; i += 1) {
                    if (secondArr[i] > secondArr[i + 1]) {
                        temp = secondArr[i];
                        secondArr[i] = secondArr[i + 1];
                        secondArr[i + 1] = temp;
                        swapped = true;
                    }
                }
            }while (swapped)
            return secondArr;
        
    }
    function getNthMinElement(secondArr, nth) {
const sortedArr = bubbleSort(secondArr)
return sortedArr[nth-1];
    }
    console.log(getNthMinElement(secondArr, 2))
