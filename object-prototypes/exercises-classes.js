class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        return `${this.getFullName()} - ${this.job}, earns: ${this.salary}`
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary(increase) {
        if (increase < 0 || increase > 1) {
            throw new Error('Invalid percentage of increase')
        }

        this.salary *= (1 + increase);
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        return this.specialization;
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }

    changeDepartment(department) {
        this.department = department;
    }
}

var mara = new Employee('Mara', 'Maric', 'teacher', 300);
console.log(mara);
var pera = new Developer('Pera', 'Peric', 'JS programmer', 1000, 'Front-End');
console.log(pera);
var koja = new Manager('Koja', 'Kojic', 'manager', 1000, 'D1')
console.log(koja);
console.log(mara.getSalary());
mara.increaseSalary(0.1);
console.log(mara.getSalary());
var maraData = mara.getData();
console.log(maraData);

console.log(pera.getSpecialization());

koja.changeDepartment('D3');
var kojaData = koja.getData();
console.log(kojaData);
console.log(koja.getDepartment());
