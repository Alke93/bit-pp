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

function createProject (description, programmingLanguage, gitRepository, status) {
    var project = {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        status: status,
        printRepository: function () {
            console.log (this.gitRepository);
        },
        isJavaScript: function (programmingLanguage) {
            if (this.programmingLanguage === 'JavaScript') {
                return true;
            } else {
                return false;
            }
        },
        isDevelopment: function (status) { 
            if (this.status === 'development') {
                return true;
            } else {
                return false;
            }
        }
    };

    return project;
}

var project1 = createProject ('project1', 'JavaScript', 'JS projects', 'development');
var project2 = createProject ('project2', 'C#', 'C# projects', 'development');
var project3 = createProject ('project3', 'Java', 'Java projects', 'development');

project1.printRepository();
console.log(project1.isDevelopment())
console.log(project1.isJavaScript());
console.log(project2.isJavaScript())