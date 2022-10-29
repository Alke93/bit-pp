//Write a program that calculates the maximum of two given numbers.
function maxOutOfTwo(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

console.log(maxOutOfTwo(11, 8));

//Write a program that checks if a given number is odd.
function checkIfIsOdd(a) {
    return a % 2 !== 0;
}

console.log(checkIfIsOdd(3))

//Write a program that checks if a given number is a three digit long number.
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}

//Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))
//Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);

//Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:

function draw(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '*'
    }

    console.log(result);
}

function drawLines() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + '']
        draw(value);
    }
}

drawLines(8, 3, 5)
//7. simillar to 3.
//Write a program that calculates a number of appearances of a given number in a given array.
function calculateAppearances(input, value) {
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (value === input[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(calculateAppearances([3, 4, 1, 8, 7, 1], 1))

//Write a program that calculates the sum of odd elements of a given array. 
function sumOfElements(input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 != 0)
            result += input[i];
    }

    return result;
}

console.log(sumOfElements([4, 3, 1, 8, 7, 1]))

//Write a program that calculates the number of appearances of a letter a in a given string. 
//Modify the program so it calculates the number of both letters a and A.

function sumOfLetterAppearences(inputString, inputLetter) {
    var counter = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() == inputLetter.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

console.log(sumOfLetterAppearences('It\'s a beautiful day', 'i'));

//Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concatenateString(input, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += input;
    }

    return result;
}

console.log(concatenateString('Test', 4))
