function Person(name, surname) {
    this.name = name;
    this.surname = surname;
 }
 
 // Person test
 var laza = new Person('Laza', 'Lazic');
 console.log(laza);
 
 function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
 }
 
 // Employee inherits from Person
 Employee.prototype = Object.create(Person.prototype);
 Employee.prototype.constructor = Employee;
 
 
 // Employee test
 var mara = new Employee('Mara', 'Maric', 'teacher', 300);
 console.log(mara);
 
 
 function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
 }
 
 // Developer inherits from Employee
 Developer.prototype = Object.create(Employee.prototype);
 Developer.prototype.constructor = Developer;
 
 // Developer test
 var pera = new Developer('Pera', 'Peric', 'JS programmer', 1000, 'Front-End');
 console.log(pera);
 
 
 
 
 function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
 }
 
 // Manager inherits from Employee
 Manager.prototype = Object.create(Employee.prototype);
 Manager.prototype.constructor = Manager;
 
 // Manager test
 var koja = new Manager('Koja', 'Kojic', 'manager', 1000, 'D1')
 console.log(koja);
 
 
 // 2) All developers should inherit method
 Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
 }
 
 // 3) All managers should inherit methods
 Manager.prototype.getDepartment = function () {
    console.log(this.department);
 }
 
 Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
 }
 
 // 4) All employees should inherit methods
 Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
 }
 
 Employee.prototype.getSalary = function () {
    console.log(this.salary);
 }
 
 Employee.prototype.increaseSalary = function (increase) {
    if (increase < 0 || increase > 1) {
        throw new Error('Invalid percentage of increase')
    }

    this.salary *= (1 + increase);
 }
 
 
 // tests
 mara.getSalary();
 mara.increaseSalary(0.1);
 mara.getSalary();
 var maraData = mara.getData();
 console.log(maraData);
 
 pera.getSpecialization();
 
 koja.changeDepartment('D3');
 var kojaData = koja.getData();
 console.log(kojaData);
 koja.getDepartment();
 