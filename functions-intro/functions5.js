// Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
function swapMinimumAndMaximumElement(array) {
    var minElement = 9007199254740991; // max safe number in JavaScript
    var maxElement = -9007199254740991;

    var minIndex = 0;
    var maxIndex = 0;

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        newArray[i] = element;

        if (element > maxElement) {
            maxElement = element;
            maxIndex = i;
        }

        if (element < minElement) {
            minElement = element;
            minIndex = i;
        }

        if (i === array.length - 1) {
            newArray[maxIndex] = minElement;
            newArray[minIndex] = maxElement;
        }
    }

    return newArray;
}

var array = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(swapMinimumAndMaximumElement(array));
// Use the following array to make a new one by dividing its values by two and adding 5.
// If a given element's value is 0, change it to 20
function computeArray(array, valueToDivide, valueToAdd, valueIfElementEqualsZero) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        element = element / valueToDivide + valueToAdd;

        if (element === 0) {
            element = valueIfElementEqualsZero;
        }

        newArray[i] = element;
    }

    return newArray;
}

var array = [3, 500, -10, 149, 53, 414, 1, 19];
console.log(computeArray(array, 2, 5, 20));

// Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
// Display students' names with their corresponding grade.

function printGrades(students, points) {
    var outputMessage = "";

    for (var i = 0; i < students.length; i++) {
        var score = points[i];
        var roundedScore = (score - score % 10) / 10 + 1;
        var message = students[i] + " acquired " + score + " points and earned " + roundedScore + ".";
        var failedMessage = students[i] + " acquired " + score + " points and failed to complete an exam.";

        if (score > 50 && score < 61) {
            outputMessage += "\n" + message;
        } else if (score > 60 && score < 71) {
            outputMessage += "\n" + message;
        } else if (score > 70 && score < 81) {
            outputMessage += "\n" + message;
        } else if (score > 80 && score < 91) {
            outputMessage += "\n" + message;
        } else if (score > 90 && score <= 100) {
            outputMessage += "\n" + message;
        } else {
            outputMessage += "\n" + failedMessage;
        }
    }

    return outputMessage;
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var points = [50, 39, 63, 72, 99, 51, 83, 59];
var grades = printGrades(students, points);

console.log(grades);

// Sort a previously defined array. 
// Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
function sortArray(array, multiplier) {
    var newArray = [];

    for (var i = 0; i < array.length - 1; i++) {
        var minIndex = i;
        var tempElementToSwap;

        for (var j = i + 1; j < array.length; j++) {
            var elementToCompareTo = array[j];

            if (elementToCompareTo < array[minIndex]) {
                minIndex = j;
            }
        }

        tempElementToSwap = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tempElementToSwap;
    }

    for (var k = 0; k < array.length; k++) {
        newArray[k] = array[k] * multiplier;
    }

    return newArray;
}

var array = [13, 11, 15, 5, 6, 1, 8, 12];
array = sortArray(array, 2);

console.log(array);

// Sort a previously defined array in a descending order and display it in the console.
function reverseSort(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var maxIndex = i;
        var tempElementToSwap;

        for (var j = i - 1; j >= 0; j--) {
            if (array[j] < array[maxIndex]) {
                maxIndex = j;
            }
        }

        tempElementToSwap = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = tempElementToSwap;
    }

    return array;
}

var array = [13, 11, 15, 5, 6, 1, 8, 12];
console.log(reverseSort(array));

// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
// The result should then be multiplied by 12.5 and displayed in console.

function addEvenAndSubstractOddNumbers(maxEvenNumber, maxOddNumber, multiplyBy) {
    var sum = 0;
    var largerIndex = maxEvenNumber >= maxOddNumber ? maxEvenNumber : maxOddNumber;

    for (var number = 1; number <= largerIndex; number++) {
        if (number % 2 === 0 && number <= maxEvenNumber) {
            sum += number;
        }

        if (number % 2 !== 0 && number <= maxOddNumber) {
            sum -= number;
        }
    }

    sum = sum * multiplyBy;
    return sum;
}

console.log(addEvenAndSubstractOddNumbers(1000, 500, 12.5));

// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create 
// a new string from them. Print it out in the console.
function getFirstNLetters(array, numberOfLetters) {
    var output = "";
    var tempNewElement = "";

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < numberOfLetters; j++) {
            var letter = array[i][j];
            var isLetterValid = typeof letter === "string";
            if (!isLetterValid) {
                break;
            }

            tempNewElement += letter;
        }

        if (tempNewElement.length !== numberOfLetters) {
            tempNewElement = "";
        } else if (tempNewElement.length === numberOfLetters) {
            output += tempNewElement;
            tempNewElement = "";
        }
    }

    return output;
}

var names = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

console.log(getFirstNLetters(names, 2));

// Write a program that takes a string and prints its characters out in reversed order in the console.

function reverseString(stringToReverse) {
    var outputMessage = "";
    var lastCharacterInString = stringToReverse.length - 1;

    for (var i = lastCharacterInString; i >= 0; i--) {
        var character = stringToReverse[i];
        outputMessage += character;
    }

    return outputMessage;
}

var message = "Belgrade Institute of Technology";
var reversedMessage = reverseString(message);

console.log(reversedMessage);

// Write a program that displays all the combinations of two numbers between 1 and 7. 
// Don't display two of the same numbers at the same time. Display the number of possible combinations, as well.

function combineNonDuplicatePairs(intervalFrom, inetervalTo) {
    var combinations = [];
    var numberOfPairs = 0;

    for (var i = intervalFrom, iNew = 0; i <= inetervalTo; i++, iNew++) {
        for (var j = 1, jNew = 0; j <= inetervalTo; j++) {
            if (i !== j) {
                combinations[numberOfPairs] = [i, j];
                numberOfPairs++;
                jNew++;
            }
        }
    }

    return combinations;
}

var a = 1;
var b = 7;

var combinations = combineNonDuplicatePairs(a, b);

console.log(combinations);

// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).var number = 11;


function isPrime(numberToCheck) {
    if (numberToCheck < 1) {
        return false;
    }

    for (var i = 2; i <= numberToCheck / 2; i++) {
        var isDivisible = numberToCheck % i === 0;
        if (isDivisible) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));

//Check if a given string is a palindrome (spaces are ignored). 
function isPalindrome(stringToCheck) {
    var stringWithoutSpaces = removeSpaceCharacters(stringToCheck);

    for (var i = 0; i < stringWithoutSpaces.length / 2; i++) {
        if (stringWithoutSpaces[i].toLowerCase() !== stringWithoutSpaces[stringWithoutSpaces.length - i - 1].toLowerCase()) {
            return false;
        }
    }

    return true;
}

function removeSpaceCharacters(string) {
    var newString = "";

    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if (character !== " ") {
            newString += character;
        }
    }

    return newString;
}

console.log(isPalindrome('Ana voli Milovana'))

// Write a program that calculates the greatest common divisor of two integers. 
// Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.

function findGcd(firstNumber, secondNumber) {
    var gcd = 1;

    for (var i = 1; i <= firstNumber && i <= secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

var a = 45;
var b = 9;

var gcd = findGcd(a, b);

console.log(gcd);
