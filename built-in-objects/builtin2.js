var obj = {};
Object.defineProperty(obj, 'name', { value: 'Leonardo', writable: true, enumerable: false });
console.log(obj.name);
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('test'));
console.log(Object.isExtensible(obj));
obj.date = 'today';
Object.preventExtensions(obj);
obj.date = 'asdf';
obj.test = 'test'
console.log(obj.date);
console.log(obj.test);

var newObj = {
    date: 'today'
}

Object.freeze(newObj);
console.log(Object.isSealed(newObj));
console.log(Object.isExtensible(newObj));

var a = 3.8651354
var toFixed = a.toFixed(2);
var toPrecised = a.toPrecision(2);
console.log(toFixed);
console.log(toPrecised);

var array = new Array(5, 3, 18, 44, -1, 8)
console.log(array);

var arrayB = new Array(5);
console.log(arrayB);
var push = array.push(7);
var pop = array.pop();
console.log(push);
console.log(pop);

var sorted = array.sort(function (a, b) {
    return a - b;
});
console.log(sorted);

var a = [3, 5, 11, -1, 7, 'test'];

// var b = a.sort(); // [1, 3, 5, 7, 'test'];
// console.log(b);

// var joinedArray = a.join('')
// console.log(joinedArray);

// var c = a.slice(1, 5)
// console.log(c);
// console.log(a);

var b = a.splice(1, 5, 33, 22, 55, 45);
console.log(b);
console.log(a);

var str = new String('Potato head');
// var upper = str.toUpperCase();
// var lower = str.toLowerCase();
// console.log(str);
// console.log(upper);
// console.log(lower);
// console.log(str.charAt(0));
// console.log(str[0]);
// var indexO = str.indexOf('ea');
// var lastIndexO = str.lastIndexOf('O');
// var contains = str.includes('ea')
// console.log(contains);
// console.log(indexO);
// console.log(lastIndexO);

var sliced = str.slice(1, -1); //str.length - 1
var substringed = str.substring(1, -1);
console.log(sliced);
console.log(substringed);

var str1 = new String('Potato head head');
// var splitted = str1.split('a');
// var joined = splitted.join('a');
// console.log(splitted);
// console.log(joined);

// var concat = 's'.concat(str1);
// console.log(str1.valueOf());
// console.log(concat);
var replaced = str1.replace('a', 's');
console.log(replaced);

var random = 10 * Math.random().toFixed(1);
console.log(random);

var min = Math.min(1, 2, -3, 4, 5, 6, 7);
console.log(min);

var pow = Math.pow(2, 10);
var root = Math.sqrt(144);
console.log(pow);
console.log(root);

var now = new Date();
console.log(now);
now.setMonth(10);
console.log(now.getDate(), now.getFullYear(), now.getHours(), now.getDay()); 