// ==========================================
// FINAL PRACTICE: Full OOP Architecture
// ==========================================

// Base Class
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    
    getSalary() {
        return this.salary;
    }
    
    introduce() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// Child Class
class Manager extends Employee {
    constructor(name, salary, department, teamSize) {
        // We MUST call super() first to let Employee initialize name, salary, and department
        super(name, salary, department);
        
        // Now we can set Manager-specific properties
        this.teamSize = teamSize;
    }
    
    getTeamSize() {
        return this.teamSize;
    }
    
    // Method Overriding: We completely overwrite the Employee's version of introduce()
    introduce() {
        return `Hello, my name is ${this.name}. I manage the ${this.department} department with a team of ${this.teamSize} people.`;
    }
}

console.log("=== Final Practice Execution ===");

// Instantiate the object
const manager = new Manager("Aditya", 80000, "Engineering", 5);

// Test 1: Inherited Method
console.log("Salary check:", manager.getSalary()); 

// Test 2: Child-Specific Method
console.log("Team Size check:", manager.getTeamSize()); 

// Test 3: Overridden Method
console.log("Introduction:", manager.introduce()); 

