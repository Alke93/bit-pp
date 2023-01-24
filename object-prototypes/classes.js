class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return `${this.name} ${this.surname}`;
    }

    getInfo() {
        return this.fullName();
    }
}

class Programmer extends Person {
    constructor(name, surname, favouriteLanguage) {
        super(name, surname);
        this.favouriteLanguage = favouriteLanguage;
    }

    getInfo() {
        return super.getInfo() + ' ' + this.favouriteLanguage;
    }
}

var programmer = new Programmer('Pera', 'Peric', 'JS');
console.log(programmer.getInfo());

class Tester extends Person {
    constructor(name, surname, favouriteTestingFramework) {
        super(name, surname);
        this.favouriteTestingFramework = favouriteTestingFramework;
    }

    getInfo() {
        return super.getInfo() + ' ' + this.favouriteTestingFramework;
    }
}

var tester = new Tester('Petar', 'Petrovic', 'Selenium');
console.log(tester.getInfo());

class BackendProgrammer extends Programmer {
    constructor(name, surname, language, db) {
        super(name, surname, language);
        this.db = db;
    }
}

var backendProgrammer = new BackendProgrammer('Nikola', 'Alic', 'C#', 'SQL Server');
console.log(backendProgrammer.fullName());