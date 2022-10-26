//Write a program that checks if a given element e is in the array a.
var e = 3;
var a = [5, -4.2, 3, 7]

for (var element in a) {
    if (e == element) {
        console.log('Array contains input number');
        break;
    }
}

//Write a program that multiplies every positive element of a given array by 2.
var array = [-3, 11, 5, 3.4, -8]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 0) {
        array[index] = element * 2;
    }
    
}

console.log(array);

// Write a program that finds the minimum of a given array and prints out its value and
// index.

var inputArray = [4, 2, 1, 0, -1, -3, 6]
var minimum;
for(var i = 0; i< inputArray.length; i++) {
    var element = inputArray[i];
    if (element<minimum || minimum === undefined) {
        minimum = element;
    }
}

console.log(minimum);

//Write a program that finds the first element larger than minimum and prints out its value.
var secondMinimum = inputArray[0];
minimum = inputArray[0];
for (var i = 0; i<inputArray.length; i++) {
    var element = inputArray[i];
    if (element<minimum) {
        minimum = element;
    }
}

for (var j = 0; j< inputArray.length; j++) {
    var element = inputArray[j];
    if (element < secondMinimum && element > minimum) {
        secondMinimum = element;
    }
}

console.log(minimum);
console.log(secondMinimum);

//Write a program that calculates the sum of positive elements in the array.
var positiveSum = 0;
var inputNumbers = [3, 11, -5, -3, 2];
for (var i = 0; i< inputNumbers.length; i++) {
    var element = inputNumbers[i];
    if (element> 0) {
        positiveSum += element;
    }
}

console.log(positiveSum);

// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

var input = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = false;
var j = input.length -1;
for(var i = 0; i< input.length; i++) {
    if (i == j) {
        break;
    }
    if (input[i] == input[j]) {
        isSymmetric = true;
    } else {
        isSymmetric = false;
        break;
    }

    j--;
}

console.log(isSymmetric)
// Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.

var array1 = [4, 5, 6, 2]
var array2 = [3, 8, 11, 9];
var result = [];
// for (var i = 0; i < array1.length; i++) {
//     result.push(array1[i]);
//     result.push(array2[i]);
// }

// console.log(result);
var j = 0;
var z = 0;
for(var i = 0; i< array1.length + array2.length; i+=2) {
    j=i+1;
    result[i]=array1[z];
    result[j]=array2[z];
    z++;
}

console.log(result);

// Write a program that concatenates two arrays.

result = [];
// result = array1.concat(array2);
// console.log(result);

var array1Length = array1.length;
var array2Length = array2.length;
for(var i = 0; i < array1Length + array2Length; i++) {
    if (i < array1Length) {
        result[i] = array1[i]
    } else if (i >= array1Length) {
        result[i] = array2[(i-array1Length)]
    }
}

console.log(result);

//Write a program that deletes a given element e from the array a.

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var result = [];
for(var i =0; i<a.length;i++) {
    if (a[i] != e) {
        result.push(a[i])
    }
}

console.log(result);

// Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.

var e = 78;
var p = 3;
var array = [2, -2, 33, 12, 5, 8];
if (p > array.length) {
    console.log('Position number is greater than array length')
}

// var splicedRight = array.splice(p);

// console.log(splicedRight);
// console.log(array);

// array.push(e);
// var result = array.concat(splicedRight);
// console.log(result);

var result = [];
for (var i = 0; i<=array.length;i++) {
    if (i == p) {
        result [i] = e
    } else if (i < p){
        result [i] = array[i];
    } else {
        result [i] = array[(i-1)]
    }
}

console.log(result);
var a = [2, -2, 33, 12, 5, 8];
var p = 3;
var e = 78;
if(p <= a.length && p >= 0) {
    for(i = a.length; i > p; i--) {
        a[i] = a[i-1];
    }

    console.log(a);
    a[p] = e;

    console.log(a);
} else {
    console.log('error');
}
var a = [2, -2, 33, 12, 5, 8]
var e = 78;
var p = 3;

a.splice(p, 0, e)
console.log(a);
