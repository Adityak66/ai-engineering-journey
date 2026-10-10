// ==========================================
// 10. Method Overriding
// ==========================================

class Employee {
    introduce() {
        return "I am an employee";
    }
}

class Manager extends Employee {
    // Because this method has the exact same name as the parent method,
    // it "overrides" it. The JS Engine finds this one first and stops looking.
    introduce() {
        return "I am a manager";
    }

    // If we ever need to forcefully trigger the parent's logic, 
    // we can use 'super' to reach past the override.
    detailedIntroduction() {
        const parentLogic = super.introduce();
        return `${parentLogic}... but more specifically, I lead the department!`;
    }
}

const employee = new Employee();
const manager = new Manager();

console.log("=== Method Overriding ===");
console.log("Employee instance:", employee.introduce()); // "I am an employee"
console.log("Manager instance:", manager.introduce());   // "I am a manager"

console.log("\n=== Using super.method() ===");
console.log(manager.detailedIntroduction());

