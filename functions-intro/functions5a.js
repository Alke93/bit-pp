// Napisati funkciju u JavaScript - u koja na osnovu niza 6 različitih citata i autora, 
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program pokrene.
function randomQuote(inputArray) {
    var random = Math.floor(Math.random() * inputArray.length)
    return inputArray[random];
}

var quote = randomQuote(['"Mislim, dakle postojim", Rene Dekart', '"Fortuna fortes adiuvat", Latinska izreka', '"Ako sam video dalje od drugih, to je bilo zato sto sam stajao na ramenima divova", Ser Isak Njutn'])
console.log(quote);

// Napisati funkciju koja za godinu(kao ceo pozitivan broj) proverava da li je prestupna.
// Godina je prestupna ako je deljiva sa 4 i nije godina veka(znači ako nije deljiva sa 100 - 1900. nije bila prestupna).
// Od toga odstupa svaka četvrta godina veka(znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je prestupna).

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var leapYear = isLeapYear(2020);
if (leapYear) {
    console.log('Godina je prestupna')
}

// Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima samoglasnika i koliko suglasnika.

function isVowel(str) {
    return str.match(/^[aeiou]$/i);
}

function isLetter(str) {
    return str.match(/[a-z]/i);
}

function countVowelsAndConsonants(word) {
    if (word.length < 1) {
        return;
    }

    var consonants = 0;
    var vowels = 0;
    for (var i = 0; i < word.length; i++) {
        if (isLetter(word[i])) {
            if (isVowel(word[i])) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return [vowels, consonants]
}

var resultArray = countVowelsAndConsonants('Ko ne zna za strah, taj ide napred');
console.log('Vowels:', resultArray[0], '; Consonants:', resultArray[1])

// Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove podataka pojedinačnih elemenata ulaznog niza.

function getArayDataTypes(array) {
    if (!array || array.length == 0) {
        return;
    }

    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[i] = typeof array[i]
    }

    return result;
}

console.log(getArayDataTypes(['yeah', 212, true]))

// Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu ispisuje samo stringove koji u sebi ne sadrže brojeve. 
// Primer: ulazni niz [“12bb”, “pp”, “as23s”, “00sd”] => rezultat [“pp”].

function checkIfThereIsANumber(array) {
    if (!array || array.length == 0) {
        return;
    }

    var result = [];
    for (var i = 0; i < array.length; i++) {
        var containsNumber = false;
        for (var j = 0; j < array[i].length; j++) {
            var num = Number(array[i][j]);
            if (!isNaN(num)) {
                containsNumber = true;
                break;
            }
        }

        if (!containsNumber) {
            result.push(array[i])
        }
    }

    return result;
}

console.log(checkIfThereIsANumber(['12bb', 'pp', 'as23s', '00sd']))

// Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima: 
// dužinu stringa, prvi karakter stringa, poslednji karakter, 
// središnji karakter ako string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran broj znakova, 
// indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ” ili “not found” ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] , 
// Primer 2: “Science" => [7, "S", "e", "e", "@ index 5"]

function getData(str) {
    if (!str || str.length < 3) {
        return [];
    }

    var middleCharacters = '';
    if (str.length % 2 == 0) {
        middleCharacters = str[str.length / 2 - 1] + str[str.length / 2]
    } else {
        middleCharacters = str[Math.floor(str.length / 2)]
    }

    var index = 'Not found'
    for (var i = 2; i < str.length; i++) {
        if (str[i] == str[1]) {
            index = '@ Index ' + i;
            break;
        }
    }

    return [str.length, str[0], str[str.length - 1], middleCharacters, index]
}

console.log(getData('Computer'))
console.log(getData('ss'))

// Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja bar jednom osim dva elementa. 
// Kreirati funkciju koja ispisuje dva elementa koja se ne ponavljaju.

function getRepeatingElements(array) {
    if (!array || array.length == 0) {
        return [];
    }

    var result = [];
    for (var i = 0; i < array.length; i++) {
        var counter = 0;
        for (var j = 0; j < array.length; j++) {
            if (i != j && array[i] == array[j]) {
                counter++;
                break;
            }
        }

        if (counter == 0) {
            result.push(array[i])
        }
    }

    return result;
}

console.log(getRepeatingElements([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))

// Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5],  N=2) => [[2, 3], [4, 5]] 
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]

function splitArray(array, length) {
    if(!array || array.length <= length) {
        return array;
    }
    
    var result = [];
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        if (newArray.length == length) {
            result.push(newArray);
            newArray = [];
        } else if (i == array.length - 1) {
            result.push(newArray)
        }
    }

    return result;
}

console.log(splitArray([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));