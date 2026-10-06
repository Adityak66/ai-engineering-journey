// ==========================================
// Practice 1: Employee (call, apply, bind)
// ==========================================

const employee = {
    name: "Aditya",
    department: "Engineering",
    salary: 50000
};

function showEmployee(location) {
    console.log(`${this.name} works in ${this.department} from ${location}`);
}

console.log("=== Using call() ===");
// Executes immediately. Passes argument normally.
showEmployee.call(employee, "Nashik");

console.log("\n=== Using apply() ===");
// Executes immediately. Passes argument wrapped in an array.
showEmployee.apply(employee, ["Nashik"]);

console.log("\n=== Using bind() ===");
// Does NOT execute immediately! 
// It returns a brand NEW function permanently glued to the 'employee' object.
const showEmployeeDetails = showEmployee.bind(employee);

// We can now call our new bounded function normally, whenever we want!
showEmployeeDetails("Nashik");
