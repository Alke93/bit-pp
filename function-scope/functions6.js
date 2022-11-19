//  Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

function addHeaderAndFooter(maxLength) {
    var result = '';
    for (var i = 0; i < maxLength; i++) {
        result += '*'
    }

    return result;
}

function addStars(str, maxLength) {
    var result = '* ' + str;
    for (var i = 0; i < maxLength - str.length - 4; i++) {
        result += ' ';
    }

    return result + ' *';
}

function addFrame(inputArray) {
    if (!inputArray || inputArray.length < 1) {
        return inputArray;
    }

    var maxLength = 0;
    for (var i = 0; i < inputArray.length; i++) {
        var wordLength = inputArray[i].length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }

    maxLength += 4;
    var header = addHeaderAndFooter(maxLength);
    var result = header + '\n';

    for (var i = 0; i < inputArray.length; i++) {
        result += addStars(inputArray[i], maxLength) + '\n'
    }

    result += header;

    return result;
}

console.log(addFrame(["Hello", "World", "in", "a", "frame"]))

