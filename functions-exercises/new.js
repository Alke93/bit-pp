//Count vowels and consonants

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function isVowel(str) {
    return str.length === 1 && str.match(/[aeiou]/i);
}

function countVowelsAndConsonants(word) {
    if (!word || word.length == 0) {
        return [];
    }

    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < word.length; i++) {
        if (isLetter(word[i])) {
            if (isVowel(word[i])) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return [vowels, consonants];
}

var result = countVowelsAndConsonants('Danas je subota');
console.log('Broj samoglasnika: ' + result[0] + ' Broj suglasnika: ' + result[1])

//Non repeat

function nonRepeat(inputArray) {
    if (!inputArray || inputArray.length == 0) {
        return [];
    }

    var result = [];
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray.length; j++) {
            if (inputArray[i] == inputArray[j] && i != j) {
                break;
            }
        }

        if (j == inputArray.length) {
            result.push(inputArray[i])
        }
    }

    return result;
}

console.log(nonRepeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))

//Array split
function arraySplit(inputArray, count) {
    if (!inputArray || !count || count == 1 || count > inputArray.length) {
        return [];
    }

    var result = [];

    for (var i = 0; i < inputArray.length; i += count) {
        var smaller = [];
        var z = i;
        for (var j = 0; j < count; j++) {
            if (inputArray[z]) {
                smaller.push(inputArray[z]);
                z++;
            }
        }

        result.push(smaller);
    }

    return result;
}

console.log(arraySplit([2, 3, 4, 5, 6], 3))

//Diamond

function fillArray(result, i) {
    for (var j = 1; j <= i; j++) {
        result.push(i);
    }
}

function diamondArrays(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        fillArray(result, i);
    }

    for (var i = num - 1; i >= 1; i--) {
        fillArray(result, i);
    }

    return result;
}

console.log(diamondArrays(5))

//Prime numbers
function primeNumbers(num) {
    var result = [];
    for (var i = 2; i <= num; i++) {
        var notPrime = false;
        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && i != j) {
                notPrime = true;
                break;
            }
        }

        if (!notPrime) {
            result.push(i)
        }
    }

    console.log(`There are ${result.length} prime numbers: ` + result);
}

primeNumbers(19)

//Validate password

function checkLetter(password, letterCase) {
    for (var i = 0; i < password.length; i++) {
        if(isLetter(password[i])) {
            if(letterCase && password[i] === password[i].toUpperCase()) {
                return true;
            } else if(!letterCase && password[i] === password[i].toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}

function checkIfContainsNumber(password) {
    for(var i=0; i<password.length;i++) {
        var parsed = Number(password[i])
        if(!isNaN(parsed)) {
            return true;
        }
    }

    return false;
}

function validatePassword(password) {
    if (password.length < 6 || password.length > 24) {
        console.log('Password must be between 6 and 24');
        return false;
    }

    var containsUpper = checkLetter(password, true);   

    if(!containsUpper) {
        console.log('Password must contain at least one capitol letter');
        return false;
    }

    var containsLower = checkLetter(password, false);
    if (!containsLower) {
        console.log('Password must contain at least one lower case letter');
        return false;
    }

    var containsDigit = checkIfContainsNumber(password);
    if (!containsDigit) {
        console.log('Password must contain at least one digit');
        return false;
    }

    var threeInRow = false;
    for (letter in password) {
        if (password[letter] === password[parseInt(letter) + 1] && password[letter] === password[parseInt(letter) + 2]) {
            threeInRow = true
            break;
        }
    }

    if (threeInRow) {
        console.log('password cannot have three repeated characters')
        return false;
    }

    var specialChars = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .';
    var usesSpecial = false;
    for(var i = 0; i<password.length; i++) {
        if(!isLetter(password[i]) && isNaN(password[i]) && !specialChars.includes(password[i])) {
            usesSpecial = true;
            break;
        }
    }

    if (usesNotAllowedSpecials) {
        console.log('Password can only contain permitted characters')
        return false;
    }

    return true;
}

var anonimousLetter = function(str) {
    return isLetter(str);
}

console.log(anonimousLetter('B'))

var b = function(p) {
    return p;
}

console.log(b(4))

function test(b) {
    return b(5)
}

console.log(test(b))

var sum = function (a, b) {
    return a + b;
 };
 
 var add = sum;
 console.log(typeof add);