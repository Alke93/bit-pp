function outer() {
    console.log('in outer');
}

{
    let inner = function () {
        console.log('in inner');
    }
    outer(); // works
    inner(); // works
}

//outer(); // works
//inner();

//  var pizza = true;
//  pizza = false;

const pizza = true;
pizza = false;

const randomObj = { random: 'test' }
randomObj.random = 'test1';
console.log(randomObj)

function logActivity(name = "Bla Bla", activity = "running") {
    console.log(`${name} loves ${activity}`)
}

logActivity()

const fruit = 'apple';
const number = 19;

const obj = {
    fruit, name: 'asdf', number, getData() {
        console.log(fruit, number);
    }
};
console.log(obj);
obj.getData();

const sandwich = {
    bread: "italian",
    meat: "tuna",
    cheese: "swiss",
}

let { bread, meat } = sandwich;

console.log(bread, meat);

sandwich.bread = 'French';
meat = 'asdf';

console.log(bread, meat);
console.log(sandwich);

function showName(personObject) {
    console.log(`${personObject.name} ${personObject.surname}`)
}

const regularPerson = {
    name: "John", surname: "Snow"
}

//showName(regularPerson)
// John

//  function showNameDest({ name, surname }) {
//     console.log(`${name} ${surname}`)
//  }

//  showNameDest(regularPerson)

const companies = ["Apple", "Microsoft", "Samsung"];
const [firstCompany, secondCompany, thirdCompany] = companies
console.log(firstCompany, secondCompany, thirdCompany);

const showNameDest = ({ name, surname }) => {
    console.log(`${name} ${surname}`)
}

showNameDest(regularPerson);

const arr = [1, 2, 3, 4];
let sum = 0;
arr.forEach(element => {
    sum += element;
})

arr.forEach(function (element) {
    sum += element;
})

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
}

console.log(sum);

const peaks = ["Tallac", "Ralston", "Rose"]
// console.log(peaks, peaks2)
const canyons = ["Ward", "Blackwood"]
const peaks2 = [...peaks, ...canyons];

// console.log(peaks2.join(','))

const [first, second, ...rest] = peaks2;
console.log(first);
console.log(rest);
console.log(peaks2);

const morning = {
    breakfast: "Ham and eggs",
    lunch: "Burger"
 }
 
 const dinner = "Fish"
 
 const backpackingMeals = {
    ...morning,
    dinner
 }
 
 console.log(backpackingMeals)