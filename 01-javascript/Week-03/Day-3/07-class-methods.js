// ==========================================
// 7. Class Methods
// ==========================================

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    introduce() {
        return `Hi, I am ${this.name}`;
    }
}

const employee = new Employee("Aditya", 50000);

console.log("=== Multiple Class Methods ===");
console.log(employee.introduce());
console.log(`My salary is ₹${employee.getSalary()}`);

