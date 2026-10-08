// 5. Constructor Prototypes


function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
    
    // BAD PRACTICE: 
    // this.getSalary = function() { return this.salary; }
    // If we did this, a brand new function would be created in memory 
    // for EVERY single employee we instantiate!
}

// GOOD PRACTICE:
// We attach the method directly to the master blueprint (the prototype).
// Now, millions of Employee objects can all SHARE this single function in memory.
Employee.prototype.getSalary = function () {
    return this.salary;
};

const employee1 = new Employee("John", 50000);
const employee2 = new Employee("Sarah", 60000);

console.log("=== Executing Shared Prototype Method ===");
console.log("John's Salary:", employee1.getSalary());
console.log("Sarah's Salary:", employee2.getSalary());

console.log("\n=== Memory Efficiency Proof ===");
// Do both objects point to the EXACT same function reference in memory?
console.log("Do they share the same function?", employee1.getSalary === employee2.getSalary);

