// var hero = {
//     name: 'Leonardo',
//     kind: 'Turtle',
//     occupation: 'Ninja',
//     say: function (params) {
//         return 'I am ' + params;
//     }
// };

// console.log(hero.say('Ninja'));

// console.log(hero);
// console.log(hero.name);
// console.log(hero['name']);

// function readProperty(propertyName) {
//     return hero[propertyName];
// }

// console.log(readProperty('lastname'))
// console.log(hero.lastname);

var book = {
    name: 'Na Drini cuprija',
    published: 1945,
    author: {
        firstname: 'Ivo',
        lastname: 'Andric'
    }
};

// console.log(book.author.firstname);
// console.log(book['author']['firstname'])
// console.log(book.author['firstname']);
// console.log(book['author'].firstname)

// var x = 10;
// var y = 'abc';
// var a = x;
// var b = y;
// console.log(x, y, a, b);
// x = 9;
// console.log(x, y, a, b);

var bookA = book;
// console.log(book);
// console.log(bookA);
book.author = 'Asdf';
// console.log(book);
// console.log(bookA);
// console.log(book === bookA)

var array2 = [1, 2, 3]
console.log(array1 == array2)
console.log(JSON.stringify(array1))
console.log(JSON.stringify(array1) == JSON.stringify(array2))

var a = 10;
function changeNumber(param) {
    param = param + 2;
    console.log(param);
}

changeNumber(a);
console.log(a);

var person = {
    name : 'Ivo Andric'
}

function changePerson(param) {
    param.name = 'Mesa Selimovic'
};

changePerson(person);
console.log(person);

function changePersonB(param) {
    var name = param.name;
    return {name: name}
};

var array1 = [1, 2, 3]
var arrayB = array1.filter(function(item) {
    return item == 1;
});

console.log(array1);
console.log(arrayB)