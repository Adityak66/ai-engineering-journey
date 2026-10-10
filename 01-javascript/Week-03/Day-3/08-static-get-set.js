// ==========================================
// 8. Static Methods and Getters/Setters
// ==========================================

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // ------------------------------------------
    // STATIC METHOD
    // ------------------------------------------
    // Belongs to the class ITSELF, not the instance objects.
    static companyName() {
        return "ABC Technologies";
    }

    // ------------------------------------------
    // GETTER
    // ------------------------------------------
    // Acts like a property, but computes a value dynamically.
    get annualSalary() {
        return this.salary * 12;
    }

    // ------------------------------------------
    // SETTER
    // ------------------------------------------
    // Allows us to intercept an assignment and run validation logic!
    set employeeSalary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.salary = value;
    }
}

console.log("=== Static Method ===");
// Called directly on the Blueprint (Employee), NOT the instance (employee).
console.log(Employee.companyName()); 

// Creating an instance
const employee = new Employee("Aditya", 50000);

console.log("\n=== Getter ===");
// Notice there are NO parentheses! We access it like a normal property.
console.log(`Annual Salary: ₹${employee.annualSalary}`);

console.log("\n=== Setter ===");
// Notice there are NO parentheses! We assign to it like a normal property.
employee.employeeSalary = 60000;
console.log(`New monthly salary is: ₹${employee.salary}`);
console.log(`New Annual Salary computes to: ₹${employee.annualSalary}`);

console.log("\n=== Testing Setter Validation ===");
try {
    employee.employeeSalary = -500;
} catch (error) {
    console.error("Caught Validation Error:", error.message);
}

