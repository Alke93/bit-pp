// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log('Even number', i)
    } else {
        console.log('Odd number', i);
    }
}

// Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}

console.log(sum);

// Write a program to compute the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5, 6];
var sum = 0;
var product = 1;
var i;

for (i = 0; i < array.length; i += 1) {
    sum += array[i];
    product *= array[i];
}

console.log('Sum : ' + sum + ' Product :  ' + product);

// Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var output = '';

for (var i = 0; i < x.length; i++) {
   var element = x[i];
   output += element;
}

console.log(x.length);
console.log(output);

// Write a program that prints the elements of the following array.
var array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (var i in array) {
    console.log("row " + i);
    for (var j in array[i]) {
        console.log(" " + array[i][j]);
    }
}

//Write a program that outputs the sum of squares of the first 20 numbers.
var sum = 0;    

for (var i = 0; i <= 20; i++) {
    sum += arr[i] * arr[i];
}

console.log(sum);

// Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.
var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var sumOfMarks = 0;

for (var i = 0; i < students.length; i++) {
    sumOfMarks += students[i][1];
}

var avg = sumOfMarks / students.length;

console.info("Average grade: " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}

