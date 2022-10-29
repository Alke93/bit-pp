function sum(a, b) {
    console.log(arguments);
    return a + b;
}

var result = sum(3, 4);
console.log(result);
result = sum(4, 5);
console.log(result);

function sumUpdate() {
    var args = arguments;
    var result = 0;
    
    for(var i = 0; i< args.length; i++) {
       var value = args[i+''];
       console.log(value);
       result += value;
    }

    return result;
}

var sumA = sumUpdate(6, -5, 3, 4, 5);
console.log(sumA)

