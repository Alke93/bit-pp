function multiplyByTwo(inputArray) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = element * 2;
    }
    return newArray;
}

function addOne(a) {
    return a + 1;
}

// Let's test these functions:
var inputOne = [1, 2, 3];
var outputArray = multiplyByTwo(inputOne);
console.log(outputArray); // [2, 4, 6]

var outputNum = addOne(100);
console.log(outputNum); // 101


// Now, let's say you want to have an array, myarr,
// that contains three elements, and each of the elements
// is to be passed through both functions

var inputTwo = [10, 20, 30];
var myarr = multiplyByTwo(inputTwo);
console.log(myarr);

// Now, loop through each element, passing it to addOne()

for (var i = 0; i < 3; i++) {
    myarr[i] = addOne(myarr[i]);
}

console.log(myarr);

function multiplyByTwoModified(input, num, add) {
    if (!input || input.length == 0) {
        return input;
    }

    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        element *= num;
        input[i] = add(element);
    }

    return input;
}

console.log(multiplyByTwoModified(inputTwo, 3, addOne));