var x = parseInt('40 30 20')
console.log(x);
var y = parseFloat('20.31')
console.log(y)

var z = Number('xyz')
console.log(z);

isNaN('foo') == true // a string is indeed not a number
isNaN(NaN) == true
isNaN(12) == false
isNaN([1,2,3]) == true // an array is also not a number
console.log(isNaN(undefined))

function checkIfItIsNumber(input) {
    var parsed = Number(input);
    var result = isNaN(parsed)
    if (result) {
        return 'Input is not a number'
    } else {
        return 'Input is a number'
    }
}

console.log(checkIfItIsNumber('asdf'))
console.log(checkIfItIsNumber(323))

console.log(isFinite(45))
console.log(isFinite(undefined))

var a = 10;
var b = 20;
var z = eval('a * b')
console.log(z)

function dynamicCalculation(a, b, operation) {
    var op = 'a' + operation + 'b';
    return eval(op)
}

console.log(dynamicCalculation(10, 20, '+'))