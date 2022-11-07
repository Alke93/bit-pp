// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
function toNumbers(array) {
    var i;
    var numbers = [];
    var j = 0;
  
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            numbers[j] = Number(array[i]);
            j++;
        }
    }
  
    return numbers;
  }
  
  var array = ["1", "21", undefined, "42", "1e+3", Infinity];
  var arrayOfNumbers = toNumbers(array);
  
  console.log(arrayOfNumbers);

//   Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
function toString(array) {
    var i;
    var string = '';
   
    for (i = 0; i < array.length; i++) {
        if (array[i] != undefined && array[i] != null && isFinite(array[i])) {
            string +=array[i];       
        }
    }
   
    return string;
 }
 
 var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
 var arrayAsString = toString(array);
 console.log(arrayAsString);

 // Write a program to filter out falsy values from the array.
 function arrayWithoutFalsy(array){
    var i;
    var newArray = [];
    var j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] != false && array[i] != 0 && array[i] != undefined
                && array[i] != null && !isNaN(array[i])) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
 }
 
 
 var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
 var newArray = arrayWithoutFalsy(array);
 console.log(newArray);

//  Write a program that calculates a number of integer values in the array.
function numberOfIntegers(array){
    var i;
    var integerValue;
    var counter = 0;
 
    for (i = 0; i < array.length; i++) {
        integerValue = parseInt(array[i]);
        if (isNaN(integerValue) == false && integerValue == array[i]) {
            counter++;
        }
    }
 
    return counter;
 
 }
 var integerCounter = numberOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
 console.log(integerCounter);

//  Write a program that calculates a number of float values in the array.
function numberOfFloats(array){
    var i;
    var floatValue;
    var counter = 0;
 
    for (i = 0; i < array.length; i++) {
        floatValue = Number(array[i]);
        if (isNaN(floatValue) == false && floatValue == array[i] && !Number.isInteger(floatValue)) {
            counter++;
        }
    }
 
    return counter;
 
 }
 
 var floatCounter = numberOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
 console.log(floatCounter)