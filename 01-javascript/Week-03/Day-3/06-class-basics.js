// ==========================================
// 6. Class Basics (Syntactic Sugar)
// ==========================================

// Introduced in ES6, 'class' is just syntactic sugar.
// Underneath, JavaScript is still doing EXACTLY what we did in 05-constructor-prototype.js!
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // JS automatically attaches this to Employee.prototype behind the scenes!
    getSalary() {
        return this.salary;
    }
}

const employee = new Employee("Aditya", 50000);

console.log("=== ES6 Class Basic ===");
console.log(employee);
console.log("Salary:", employee.getSalary());

// Proving it still uses prototypes under the hood:
console.log("\nDoes the class method live on the prototype?");
console.log(Employee.prototype.getSalary !== undefined); // true

