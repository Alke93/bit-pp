// replace string
function replace(sentence, element, replacement) {
    if (!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement.length != 1) {
        return sentence;
    }

    var replacementString = '';
    for (var i = 0; i < element.length; i++) {
        replacementString += replacement;
    }

    var result = '';
    for (var i = 0; i < sentence.length; i++) {
        var z = i;
        var word = '';
        for (var j = 0; j < element.length; j++) {
            if (sentence[z]) {
                word += sentence[z]
                z++;
            }
        }

        if (word.toLowerCase() == element.toLowerCase()) {
            result += replacementString;
            i += (element.length - 1);
        } else {
            result += sentence[i];
        }
    }

    return result;
}

console.log(replace('Programming in JS is super interesting!', 'super', '*'))

// Write a function that sorts an array of strings by the number of appearances of the letter 'a' or 'A'. 
function sortArrayByInputLetter(input, letter) {
    if (!input || input.length == 0 || !letter || letter.length != 1) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var counter = 0;
        for (var j = 0; j < input[i].length; j++) {
            var element = input[i][j];
            if (element == letter) {
                counter++;
            }
        }

        if (result.length > 1) {
            var maxCount = 0;
            for (var z = 0; z < result.length; z++) {
                if (result[z][1] > maxCount) {
                    maxCount = result[z][1]
                }
            }

            if (maxCount <= counter) {
                var newElement = [input[i], counter];
                result = [newElement].concat(result);
            } else {
                result.push([input[i], counter])
            }

        } else {
            result.push([input[i], counter])
        }
    }

    var sorted = [];
    for (var i = 0; i < result.length; i++) {
        sorted.push(result[i][0])
    }

    return sorted;
}

console.log(sortArrayByInputLetter(['apple', 'tea', 'amazing', 'morning', 'Nostradamus', 'Avala'], 'a'))
//Write a function that deletes a character from the given position in the string.
function deleteAt(str = '', position = 0) {
    if (!str || str.length == 0 || position > str.length) {
        return str;
    }

    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (i != position) {
            result += str[i];
        }
    }

    return result;
}

console.log(deleteAt('Goood morning', 3));

//Write a function that deletes every second element of the given array.
function deleteEverySecondElement(inputArray = []) {
    if (!inputArray || inputArray.length == 0) {
        return inputArray;
    }

    var result = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (i % 2 === 0) {
            result.push(inputArray[i]);
        }
    }

    return result;
}

console.log(deleteEverySecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]))
// Write a function that replaces the elements of the given array between two positions with
// their doubled values.
function replaceElementsBetweenIndexes(inputArray = [], positionA = 0, positionB = 1, inputNum = 0) {
    if (!inputArray || inputArray.length == 0 || !positionA || !positionB || positionA >= positionB || positionB >= inputArray.length) {
        return inputArray;
    }

    for (var i = positionA; i <= positionB; i++) {
        inputArray[i] *= inputNum
    }

    return inputArray;
}

console.log(replaceElementsBetweenIndexes([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 8, 2))
// Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!

function compareArrays(array1 = [], array2 = []) {
    if (!array1 || array1.length == 0 || !array2 || array2.length == 0) {
        return false;
    }

    // return array1.every(element => array2.includes(element));
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) {
            result.push(array1[i])
        }
    }

    console.log(result);

    return JSON.stringify(array1) === JSON.stringify(result);
}

console.log(compareArrays([3, 4, 1, 5], [8, 9, 3, 1, 11, 4, 3]))