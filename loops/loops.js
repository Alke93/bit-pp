var i = 0;
while (i<= 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i< 10);

var  a = 11;
do {
    console.log(a);
} while (a< 10)

for (var a = 0; a < 5; a++) {
    console.log(a);
    for (i=4; i > a; i--) {
        console.log('Value of i is '+i, 'Value of a '+a)
    }
}


var negativeNumbers = [2, 3, -5, -8, 4, -11, 0, 0];
var i = 0;

while (i < negativeNumbers.length) {
    var element = negativeNumbers[i];
    if (element < 0) {
        console.log("Negative number: ", element);
    }

    i++;
}

i = 0;
do {
    var element = negativeNumbers[i];
    if (element < 0) {
        console.log("Negative number: ", element);
    }

    i++;
}while (i < negativeNumbers.length)

var length = negativeNumbers.length;

for (var i = 0; i< length; i++) {
    var element = negativeNumbers[i];
    if (element< 0) {
        console.log("Negative number:", element)
    }
}

for (var element in negativeNumbers) {
    if (element <0) {
        console.log("Negative number:", element);
    }
}