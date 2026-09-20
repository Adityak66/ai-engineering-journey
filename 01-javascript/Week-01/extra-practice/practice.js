import { calculateSalary } from './salaryCalculator.js';

console.log("--- 1. Destructure ---");
const employee = {
    name: "Aditya",
    age: 22,
    salary: 60000
};
const { name, salary } = employee;
console.log(`Extracted name: ${name}, salary: ${salary}`);

console.log("\n--- 2. Rename ---");
const { salary: employeeSalary } = employee;
console.log(`Extracted as employeeSalary: ${employeeSalary}`);

console.log("\n--- 3. Array Destructuring ---");
const employees = ["John", "Sarah", "Mike"];
const [first, second] = employees;
console.log(`First: ${first}, Second: ${second}`);

console.log("\n--- 4. Spread ---");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined Array:", combined);

console.log("\n--- 5. Object Spread ---");
const originalEmp = { name: "Bob", salary: 50000 };
const updatedEmp = { ...originalEmp, salary: 60000 };
console.log("Updated Object:", updatedEmp);
console.log("Original Object (Unchanged):", originalEmp);

console.log("\n--- 6. Template Literal ---");
console.log(`${employee.name} earns ₹${employee.salary}`);

console.log("\n--- 7. Computed Property ---");
const key = "department";
const dynamicObject = {
    name: "Aditya",
    [key]: "IT"
};
console.log("Object with Computed Property:", dynamicObject);

console.log("\n--- 8. Named Export & Import ---");
const total = calculateSalary(60000, 5000);
console.log(`Using imported calculateSalary(60000, 5000): ₹${total}`);

