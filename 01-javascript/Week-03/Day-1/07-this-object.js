// 'this' Operator Practice
// The Golden Rule of 'this': 
// In a standard function, the value of 'this' depends on HOW the function is called!

const employee = {
    name: "Aditya",
    salary: 50000,
    showDetails() {
        // 'this' refers to the object that CALLED the method
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ₹${this.salary}`);
    }
};

const employee2 = {
    name: "Rahul",
    salary: 60000,
    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ₹${this.salary}`);
    }
};

console.log("=== Employee 1 ===");
// HOW is it called? As employee.showDetails(). 
// Therefore, inside the function, this === employee.
employee.showDetails();

console.log("\n=== Employee 2 ===");
// HOW is it called? As employee2.showDetails(). 
// Therefore, inside the function, this === employee2.
employee2.showDetails();
