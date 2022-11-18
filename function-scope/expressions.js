"use strict";

function canYouSpotTheProblem() {
    for (var counter = 0; counter < 10; counter++)
        console.log("Happy happy");
}
canYouSpotTheProblem();

function test() {
    for (i = 0; i < 10; i++) {
        console.log('asdf')
    }
}

test();

//  Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

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

function writeWordsInAFrame(input) {
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
}

console.log(writeWordsInAFrame(["Hello", "World", "in", "a", "frame"]));

