//Write a program that checks if a given element e is in the array a. 
function doesElementExist(array, elementToMatch) {
    if (array.length < 1 || !elementToMatch) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (elementToMatch === element) {
            return true;
        }
    }
    return false;
}

var element = 3;
var array = [5, -4.2, 3, 7];
var isMatch = doesElementExist(array, element);

console.log(isMatch ? "yes" : "no");

//  Write a program that multiplies every positive element of a given array by 2.
function doublePositiveArrayValues(inputArray) {
    if (inputArray.length < 1) {
        return inputArray;
    }

    var doubledArray = [];

    for (var i = 0; i < inputArray.length; i++) {
        var arrayElement = inputArray[i]
        if (arrayElement > 0) {
            var doubleElement = arrayElement * 2;
            doubledArray[i] = doubleElement;
        } else {
            doubledArray[i] = arrayElement;
        }
    }

    return doubledArray;
}

var array = [-3, 11, 5, 3.4, -8];
var doubledArray = doublePositiveArrayValues(array);

console.log(doubledArray);

// Write a program that finds the minimum of a given array and prints out its value and index.
function findMinimum(inputArray) {
    if (inputArray.length < 1) {
        return inputArray;
    }

    var minElement = [];
    var minElementValue = inputArray[0];
    var minElementIndex = 0;

    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i]
        if (element < minElementValue) {
            minElementValue = element;
            minElementIndex = i;
        }
    }

    minElement = [minElementValue, minElementIndex];

    return minElement;
}

var array = [4, 2, 2, -1, 6];
var minElement = findMinimum(array);

console.log(minElement);

//Write a program that finds the first element larger than minimum and prints out its value.

function findSecondMinimum(inputArray) {
    if (inputArray.length < 1) {
        return inputArray;
    }

    var minElementValue = findMinimum(inputArray)[0];
    var secondMinimum = inputArray[0]
    var secondMinimumIndex = 0;
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i]
        if (element < secondMinimum && element > minElementValue) {
            secondMinimum = element;
            secondMinimumIndex = i;
        }
    }

    return [secondMinimum, secondMinimumIndex];
}

console.log(findSecondMinimum(array));

// Write a program that calculates the sum of positive elements in the array.
function sumPositiveNumbers(array) {
    if (array.length < 1) {
        return array;
    }

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > 0) {
            sum += element;
        }
    }

    return sum;
}

var array = [3, 11, -5, -3, 2];
var sum = sumPositiveNumbers(array);

console.log(sum);

//  Write a program that checks if a given array is symmetric. 
//  An array is symmetric if it can be read the same way both from the left and the right hand side. 
function isArraySymetric(array) {
    if (array.length < 1) {
        return false;
    }

    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        var elementPair = array[array.length - i - 1]
        if (element !== elementPair) {
            return false;
        }
    }

    return true;
}

var array = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = isArraySymmetric(array);

console.log(isSymmetric ? "The array is symmetric." : "The array isn't symmetric.");

// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
function twistArrays(firstArray, secondArray) {
    var combinedArray = [];
    var arraysLength = firstArray.length + secondArray.length;

    for (var i = 0, j = 0; j < arraysLength; i++) {
        if (i < firstArray.length) {
            combinedArray[j++] = firstArray[i];
        }

        if (i < secondArray.length) {
            combinedArray[j++] = secondArray[i];
        }
    }

    return combinedArray;
}

var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var twistedArray = twistArrays(firstArray, secondArray);

console.log(twistedArray);

//  Write a program that concatenates two arrays. 
function concatenateArrays(array1, array2) {
    var array1Length = array1.length;
    var array2Length = array2.length;
    var result = [];
    for (var i = 0; i < array1Length + array2Length; i++) {
        if (i < array1Length) {
            result[i] = array1[i]
        } else if (i >= array1Length) {
            result[i] = array2[(i - array1Length)]
        }
    }

    return result;
}

var concatenated = concatenateArrays(firstArray, secondArray);
console.log(concatenated);

//Write a program that deletes a given element e from the array a. 
function deleteElement(array, elementToDelete) {
    if (array.length < 1 || !elementToDelete) {
        return array;
    }

    var newArray = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (elementToDelete !== array[i]) {
            var newArrayLength = newArray.length;
            newArray[newArrayLength] = array[i];
        }
    }

    return newArray;
}

var array = [4, 6, 2, 8, 2, 2];
var element = 2;

console.log(array);
array = deleteElement(array, element);
console.log(array);

// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
function insertElement(array, element, position) {
    position = position || 0;
    if (array.length < 1 || !element) {
        return array;
    }
 
    if (position => array.length) {
        console.log("Index out of bounds.");
        return array;
    }
 
    var newArray = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (i === position) {
            newArray[j] = element;
            newArray[j + 1] = array[i];
            j += 2;
        } else {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
 }
 
 var element = 78;
 var position = 3;
 var array = [2, -2, 33, 12, 5, 8];
 var output = insertElement(array, element, position);
 
 console.log(output);