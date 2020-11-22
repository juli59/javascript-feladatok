function returnValueExercise() {
    console.log('Function is running');
    return;
}
console.log(returnValueExercise());

function returnValueExercise2(number) {
    if (number === 1) {
        return '1';
    }
    return 'Nem 1';
    
}
console.log(returnValueExercise2(2));