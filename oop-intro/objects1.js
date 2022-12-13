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
        if(result[''+letter]) {
            result[''+letter].push(i);
        } else {
            var newArray = [i]
            result[''+letter] = newArray;
        }
    }

    return result;
}

console.log(mapLetters2('dodo'));