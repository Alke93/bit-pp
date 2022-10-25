// Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.

var num = 3;
var result = 1;
for (var i = 0; i < 3; i++) {
    result *= num;
}

console.log(result);
// Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var input = 4;
var sum = 1;
for (var i = input; i > 0; i--) {
    sum *= i;
}

console.log(sum);

// Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

var input = 5;
var resultString = '';
for (var i = 1; i <= input * 2; i++) {
    if (i % 2 === 0) {
        if (i < input * 2) {
            resultString += i + ','
        } else if (i == input * 2) {
            resultString += i + '.'
        }
    }
}

console.log('The even numbers are', resultString)
// Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var s = 232;
var result4 = 0;

while (s > 1) {
    result4 += s % 10;       // uvecavanje rezultata za narednu cifru
    s = s / 10 - (s % 10) / 10; //umanjenje dobijenog broja za vrednost iza nule, dobijamo int
}
console.log("5.Zadatak: Their sum is:  " + result4);

var sum = 0;
s = 232;
var stringArray = s.toString();
for (var i = 0; i < stringArray.length; i++) {
    var num = Number(stringArray[i]);
    sum += num;
}

console.log(sum);

//Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

var word = 'Eclip542se'
var counter = 0;
for(var i=0; i<word.length;i++) {
    if(word[i].toLowerCase().match(/[a-z]/i)) {
        counter++;
    }
}

console.log(counter);

var word = "Eclip542se";
var sumLetters = word.length;

for (var index in word) {
  if (
    word[index] === "0" ||
    word[index] === "1" ||
    word[index] === "2" ||
    word[index] === "3" ||
    word[index] === "4" ||
    word[index] === "5" ||
    word[index] === "6" ||
    word[index] === "7" ||
    word[index] === "8" ||
    word[index] === "9"
  ) {
    sumLetters--;
  }
}

console.log("There is " + sumLetters + " letters in word " + word);

//Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

var inputArray = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
var a = 'c';
var index = 0;
for (index =0; index<inputArray.length;index++) {
    if (inputArray[index] === a) {
        break;
    }
}

console.log(index);