// 4. Constructor Functions

// Before ES6 (classes), we built objects using regular functions combined with 'new'.

function Employee(name, salary) {
    // 'new' creates an empty object and assigns it to 'this'
    this.name = name;
    this.salary = salary;
}

const employee1 = new Employee("John", 50000);
const employee2 = new Employee("Sarah", 60000);

console.log("=== Employee Instances ===");
console.log(employee1);
console.log(employee2);

console.log("\n=== Checking Instance ===");
// instanceof checks if Employee.prototype appears anywhere in employee1's prototype chain
console.log("Is employee1 an instance of Employee?");
console.log(employee1 instanceof Employee); 

