// ==========================================
// 9. Class Inheritance (extends and super)
// ==========================================

// PARENT CLASS (Base)
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getSalary() {
        return this.salary;
    }
}

// CHILD CLASS (Derived)
// 'extends' physically links Manager.prototype to Employee.prototype
class Manager extends Employee {
    constructor(name, salary, teamSize) {
        // SUPER RULE:
        // You MUST call super() before attempting to use 'this' in a derived class.
        // This fires the Employee constructor, letting it handle 'name' and 'salary'.
        super(name, salary);
        
        // Now it is safe to define our own specific properties
        this.teamSize = teamSize;
    }
    
    getTeamSize() {
        return this.teamSize;
    }
}

const manager = new Manager("Aditya", 80000, 5);

console.log("=== Inheritance Example ===");
console.log(`Name (inherited property): ${manager.name}`);
console.log(`Salary (inherited method): ₹${manager.getSalary()}`);
console.log(`Team Size (child method): ${manager.getTeamSize()}`);

