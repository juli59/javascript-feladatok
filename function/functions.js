function sumElem(a, b) {
    console.log(arguments);
return a + b;
}
console.log(sumElem(400, 45))
const x = 300;
const y = 25;
console.log(sumElem(x, y));

function logArray(arr) {
    arr.push ('New value');
    console.log(arr);
}
logArray([1, 2, 3, 4, 5])
const numericArray = [1, 2, 3, 4, 5];
logArray(numericArray)