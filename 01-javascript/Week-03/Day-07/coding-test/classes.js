// coding-test/classes.js — Exercise 2 & 3: Classes & Inheritance

class Employee {
    constructor(name, salary, department = "General") {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary() {
        return this.salary;
    }

    introduce() {
        return `Hello, I'm ${this.name} working in ${this.department}.`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, teamSize) {
        super(name, salary, department); // Must be called before accessing this
        this.teamSize = teamSize;
    }

    getTeamSize() {
        return this.teamSize;
    }

    // Method Overriding
    introduce() {
        return `${super.introduce()} I lead a team of ${this.teamSize} engineers.`;
    }
}

const emp = new Employee("Aditya", 75000, "Engineering");
console.log(emp.introduce());
console.log("Monthly Salary:", emp.getSalary());

const mgr = new Manager("Sarah", 110000, "Engineering", 12);
console.log(mgr.introduce());
console.log("Team Size:", mgr.getTeamSize());
console.log("Manager instance of Employee?", mgr instanceof Employee); // true
