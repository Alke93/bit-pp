var a = [];
console.log(a);
a = [1, 2, 3];
console.log(a);
console.log(a[1]);
var lenght = a.length;
console.log(lenght);
a[2] = 5;
console.log(a);
a[3] = 6;
console.log(a);
a.push(4);
console.log(a);
a[10] = 11;
console.log(a);
delete a[3];
console.log(a);
a.pop();
console.log(a);
var b = [3, 4, 5]
delete b[2];
console.log(b);
b.pop();
console.log(b);
a[3] = b;
console.log(a);
console.log(a[3][0]);
var c = 'Peti element';
console.log(c[3]);