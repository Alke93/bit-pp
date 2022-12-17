// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number.
// {product: 'Milk', quantity: 1, price: 1.5}
function calculateTotalPrice(groceries = []) {
    if (!groceries || groceries.length == 0) {
        return 0;
    }

    var result = 0;
    for (var i = 0; i < groceries.length; i++) {
        var element = groceries[i];
        if (element && element.price && element.price > 0 && element.quantity && element.quantity > 0) {
            result += element.price * element.quantity;
        }
    }

    return result;
}

var groceries = [{ product: 'Milk', quantity: 1, price: 1.5 }, { product: 'Milk', quantity: 2, price: 3 }, { product: 'Milk', quantity: 3, price: 1.5 }]
console.log(calculateTotalPrice(groceries));
// Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},...])
function mostExpensive(jewelry = []) {
    if (!jewelry || jewelry.length == 0) {
        return 'Empty'
    }

    var name = '';
    var maxPrice = 0;
    for (var i = 0; i < jewelry.length; i++) {
        var element = jewelry[i];
        if (element.price > maxPrice) {
            maxPrice = element.price;
            name = element.name;
        }
    }

    return name;
}

console.log(mostExpensive([{ name: 'DiamondEarings', price: 980 }, { name: 'Gold watch', price: 250 }
]))

// Given a word, create an object that stores the indexes of each letter in an array
function mapLetters(str = '') {
    if (!str || str.length == 0) {
        return '';
    }

    var result = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (result['' + letter]) {
            continue;
        }
        var newArray = [i];
        for (var j = 0; j < str.length; j++) {
            if (letter == str[j] && i != j) {
                newArray.push(j);
            }
        }

        result['' + letter] = newArray;
    }

    return result;
}

console.log(mapLetters('dodo'));

function mapLetters2(str = '') {
    if (!str || str.length == 0) {
        return '';
    }

    var result = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (result['' + letter]) {
            result['' + letter].push(i);
        } else {
            var newArray = [i]
            result['' + letter] = newArray;
        }
    }

    return result;
}

console.log(mapLetters2('dodo'));

// who cursed the most in the fight between you and your spouse?
function determineWhoCursedTheMost(input = []) {
    if (!input || input.length == 0) {
        return '';
    }

    var sumA = 0;
    var sumB = 0;

    for (var i = 0; i < input.length; i++) {
        sumA += input[i].me;
        sumB += input[i].spouse;
    }

    if (sumA > sumB) {
        return 'ME';
    } else if (sumA < sumB) {
        return 'SPOUSE';
    }

    return 'DRAW';
}

console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }]));


//RGB TO HEX
function checkColor(color = 0) {
    return color < 0 || color > 255
}

function rgbToHex(color = {}) {
    if (!color || checkColor(color.red) || checkColor(color.green) || checkColor(color.blue)) {
        return 'INVALID'
    }

    var red = color.red.toString(16).padStart(2, '0');
    var green = color.green.toString(16).padStart(2, '0');
    var blue = color.blue.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}

function hexToRGB(str = '') {
    if (!str || !str.startsWith('#') || str.length != 7) {
        return null;
    }

    var colorString = str.split('#')[1];
    var red = parseInt(colorString.substring(0, 2), 16);
    var green = parseInt(colorString.substring(2, 4), 16);
    var blue = parseInt(colorString.substring(4), 16);

    return { red, green, blue };
}

var hex = rgbToHex({ red: 0, green: 128, blue: 192 });
console.log(hex);
console.log(hexToRGB(hex));

// make change
function makeChange(change = 0) {
    if (change < 0) {
        return null;
    }

    var map = {};
    var mod_q = change % 25;
    map['q'] = (change - mod_q) / 25

    var mod_d = mod_q % 10;
    map['d'] = (mod_q - mod_d) / 10;

    var mod_n = mod_d % 5;
    map['n'] = (mod_d - mod_n) / 5;
    map['p'] = mod_n;

    return map;
}

console.log(makeChange(51));

function avgNotes(input = []) {
    if (!input || input.length == 0) {
        return null;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var item = input[i];
        var newObject = { name: item.name }
        var sum = 0;
        for (var j = 0; j < item.notes.length; j++) {
            sum += item.notes[j];
        }

        var avg = parseFloat(sum / item.notes.length).toFixed(2);
        newObject['avgNote'] = avg;
        result.push(newObject);
    }

    return result;
}

console.log(avgNotes([{ name: 'John', notes: [4, 3, 1, 8, 18] }, { name: 'Mark', notes: [3, 3, 2, 8] }]));

function getBestStudent(input = []) {
    if (!input || input.length == 0) {
        return null;
    }

    var maxAverage = 0;
    var name;
    for (var i = 0; i < input.length; i++) {
        var item = input[i];
        var avgGrade = 0;
        var sum = 0;
        for (var j = 0; j < item.grades.length; j++) {
            sum += item.grades[j];
        }

        avgGrade = parseFloat(sum / item.grades.length).toFixed(2);
        if (avgGrade > maxAverage) {
            maxAverage = avgGrade;
            name = item.name;
        }
    }

    return { name: name, averageGrade: maxAverage };
}

var student = getBestStudent([{ name: 'John', grades: [100, 90, 80] }, { name: 'Mark', grades: [100, 95, 80] }])
var studentString = student.toString();
console.log(student);
console.log(studentString);