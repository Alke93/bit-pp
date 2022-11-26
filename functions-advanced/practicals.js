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