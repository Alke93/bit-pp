var b = (
    function (a) {
        console.log('boo');
        return a;
    }
 )(2);

 console.log(b);

 function addStars(str, maxLength) {
    var result = '*';
    result += ' ' + str;

    for (var i = 0; i < (maxLength - str.length - 4); i++) {
        result += ' '
    }

    return result + ' *';
}

function addHeaderAndFooter(maxLength) {
    var result = '';
    for (var i = 0; i < maxLength; i++) {
        result += '*'
    }

    return result;
}

 var c = ( function (input) {
    if (!input || input.length < 1) {
        return input;
    }

    var result = ''
    var maxLength = 0;
    for (var i = 0; i < input.length; i++) {
        var wordLength = input[i].length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }

    maxLength += 4;
    var header = addHeaderAndFooter(maxLength);
    result = header + '\n';
    for (var i = 0; i < input.length; i++) {
        result += addStars(input[i], maxLength) + '\n'
    }

    result += header;
    return result;
})(["Hello", "World", "in", "a", "frame"])

console.log(c)

function outer(c) {
    function inner(a) {
        return a + 1;
    }

    return c + inner(2);
}

var resultInner = inner(3)
console.log(resultInner)
var result = outer(3);
console.log(result);

function outer(c) {
    var inner = function (b) {
        return c + b + 1;
    }

    return inner;
}

var result = outer(0);

function sum(a, b) {
    return a + b(a)
}

console.log(sum(1, result));
// console.log(result(3));
console.log(result);
var resultB = result(3);
console.log(resultB)

function one() {
    return 1;
}

function two() {
    return 2;
}

function invokeAdd(a, b) {
    return a() + b();
}


console.log(invokeAdd(function () {return 1}, function () {return 2}));