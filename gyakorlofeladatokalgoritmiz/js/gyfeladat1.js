const numericArray = [5432, 45, 36, 3589, 11672, 872];
function getMinElementFromArray(numericArray) {

    let min = numericArray[0];
        for (let i = 0; i< numericArray.length; i += 1) {
            if (numericArray[i] < min) {
                min = numericArray[i];
            }
        }
        console.log(min);
}
        getMinElementFromArray(numericArray)