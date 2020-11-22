const arrowFunction1 = firstName => {};
console.log(arrowFunction1('John'));

const arrowFunction2 = (firstName) => 'Hello ' + firstName + '!';
console.log(arrowFunction2('John'));

const arrowFunction4 = (firstName) => ({ name: firstName });
console.log(arrowFunction4('John'));

const arrowFunction5 = (firstName) => { return { name: firstName }};
console.log(arrowFunction5('John'));

const numericArray = [2456, 67, 123, -7, 98432, 78];
numericArray.sort((a, b) => a - b);
console.log(numericArray);

/*const functionExpression = function fnName(param){
    console.log('function expression', param);
}
functionExpression('paraméter value');
const functionExpressionWarrow = (param) => {
    /*console.log(arguments);
    console.log('function expression ', param);*/
/*}
functionExpression('parameter value');
functionExpressionWarrow('arrow param');

const fnExprReturnValue = function (param) {
    return 'param value: ' + param;
}
const fnExprReturnValueWarrow = (param) => 'param value: ' + param;


console.log(fnExprReturnValue(10));
console.log(fnExprReturnValueWarrow(10));

const person = {
    firstName: 'Anna',
    lastName: 'Kiss',
    learn: function(skill) {
        console.log('Learning:' + skill)
    }
}
person.learn('javascript')*/