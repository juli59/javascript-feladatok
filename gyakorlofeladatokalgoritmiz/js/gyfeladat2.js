const numericArray = [5432, 45, 36, 3589, 11672, 872, 4];
function getMaxElementFromArray(numericArray) {

    let max = numericArray[0];
        for (let i = 0; i< numericArray.length; i += 1) {
            if (numericArray[i] > max) {
                max = numericArray[i];
            }
        }
        console.log(max);
}
        getMaxElementFromArray(numericArray)