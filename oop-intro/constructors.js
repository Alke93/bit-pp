// var hero = {
//     name: 'Leonardo',
//     sayName: function () {
//         return 'This is '.concat(this.name);
//     }
// }

// console.log(hero);
// console.log(hero.sayName());

function Hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.whoYouAre = function () {
        return 'I am ' + this.name;
    }
}

function hero(name, occupation) {
    return {
        name: name,
        occupation: occupation,
        whoYouAre: function () {
            return 'I am ' + name;
        }
    }
}

var hero1 = new Hero('Leonardo', 'Ninja');
var hero2 = hero('Leonardo', 'Ninja');
console.log(hero1.whoYouAre());
console.log(hero2.whoYouAre());

// var hero3 = Hero('Rafaelo', 'Ninja');
// console.log(hero3.name);
console.log(hero1 instanceof Hero);
console.log(hero2 instanceof Object);

function changeName(obj) {
    obj.name = 'Splinter'
}

function changeString(str) {
    str = 'new string';
}

var a = 'old string';
changeString(a);
console.log(a);

changeName(hero1);
console.log(hero1);

var hero4 = hero1;
hero4.name = 'Leonardo';
console.log(hero1);

console.log(hero4 == hero1);
console.log(hero1 == hero2)