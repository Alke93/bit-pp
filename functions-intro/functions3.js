// Write a function that reverses a number. The result must be a number.
function reverseNumber(num) {
    num = num + "";
    var output = "";
    var lastIndex = num.length - 1;
 
    for (var index = 0; index < num.length; index++) {
        var element = num[lastIndex - index];
        output += element;
    }
 
    var reversedNum = parseFloat(output);
    return reversedNum;
 }
 
 var result = reverseNumber(98765)
 
 console.log(typeof result);
 console.log(result);

//  Write a function that says whether a number is perfect.
function isPerfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }
 
    if (temp === number && temp !== 0) {
        console.log(number + " is a perfect number.");
    } else {
        console.log(num + " is not a perfect number.");
    }
 }
 
 isPerfect(28);

 // Write a function to find a word within a string.
 function searchWordCount(text, word) {

    var x = 0;
    var y = 0;
 
    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
 }
 
 console.log(searchWordCount('The quick brown fox', 'fox'));
 console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

//  Write a program to find the most frequent item of an array.
function findFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
            }
        }
        m = 0;
    }
 
    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
 }
 
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 console.log(findFrequentItem(arr1));