class Subject {
    // id: number;
    // name: string;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getSubjectName() {
        return this.name;
    }
}

class Student {
    // firstName: string;
    // lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getData() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Exam {
    // subject: Subject;
    // student: Student;
    // grade: number;

    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getRowData() {
        return `${this.subject.getSubjectName()} - ${this.student.getData()} ${this.grade}`
    }
}

var subject = new Subject(1, 'JS');
var student = new Student('Pera', 'Peric');
var exam = new Exam(subject, student, 10);
console.log(exam.student.getData())
console.log(exam.getRowData());