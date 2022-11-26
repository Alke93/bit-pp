// Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
var transformed = (function (sentence, letter, replacementCharacter) {
    var counter = 0;
    var result = '';
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() !== letter.toLowerCase()) {
            result += sentence[i];
            continue;
        }

        result += replacementCharacter;
        counter++;
    }

    return `${result}, ${counter}`;
})('programMing', 'm', '*');
console.log(transformed);
// Write a function that returns a function that calculates a decimal value of the given octal
// number.
var getNumberToDecimalConverter = function (base) {
    if (!base) {
        return 0;
    }

    function convert(number) {
        return parseInt(number, base);
    }

    return function (value) {
        return convert(value);
    }
}

var octalToDecimal = getNumberToDecimalConverter(8);
var num = octalToDecimal('034');
console.log(num);

// Write a function that checks if a given string is valid password.

function checkType(data, type) {
    if (!data || typeof data != type) {
        return false;
    }

    return true;
}

var passwordChecker = function (password, success, error) {
    // if (!success || typeof success != 'function') {
    //     return false;
    // }

    // if (!error || typeof error != 'function') {
    //     return false;
    // }

    if (!checkType(success, 'function') || !checkType(error, 'function')) {
        return false;
    }

    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function isPasswordValid(password) {
        if (typeof password != 'string' || password.length < 6) {
            return false;
        }

        for (var i = 0; i < password.length; i++) {
            if (isNumeric(password[i])) {
                return true;
            }
        }

        return false;
    }

    var isValid = isPasswordValid(password);
    if (isValid) {
        return success();
    }

    return error();
}

var success = function () {
    console.log('Your password is valid');
}

var error = function () {
    console.log('Your password is invalid');
}

passwordChecker('sdfsdf', success, error);
// Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.

var filter = function (input, conditionChecker) {
    if (!checkType(conditionChecker, 'function') || !input || input.length == 0) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        if (!conditionChecker(input[i])) {
            continue;
        }

        result.push(input[i]);
    }

    return result;
}

function checkElement(element) {
    return element % 2 != 0;
}

console.log(filter([23, 5, 7, 42, 12], checkElement));