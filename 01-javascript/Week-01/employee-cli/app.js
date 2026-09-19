import {
    addEmployee,
    removeEmployee,
    findEmployee,
    findEmployeeById,
    filterEmployees,
    getHighestSalaryEmployee,
    calculateAverageSalary,
    sortEmployeesBySalaryDesc,
    updateEmployee,
    displayEmployees
} from './services/employeeService.js';

console.log("===== EMPLOYEE MANAGEMENT CLI =====");

console.log("\n--- 1. Adding Employees ---");
addEmployee("Aditya", "IT", 60000);
addEmployee("Sarah", "HR", 45000);
addEmployee("Mike", "IT", 75000);
addEmployee("Emma", "Finance", 55000);
addEmployee("John", "Sales", 50000);
displayEmployees();

console.log("\n--- 2. Searching Employee by Name ('Sarah') ---");
console.log(findEmployee("Sarah"));

console.log("\n--- 3. Searching Employee by ID (3) ---");
console.log(findEmployeeById(3));

console.log("\n--- 4. Filtering Employees by Dept ('IT') ---");
const itEmployees = filterEmployees("IT");
displayEmployees(itEmployees);

console.log("\n--- 5. Highest Salary Employee ---");
const topEarner = getHighestSalaryEmployee();
console.log(`${topEarner.name} earns the most: ₹${topEarner.salary.toLocaleString()}`);

console.log("\n--- 6. Average Salary ---");
console.log(`Average: ₹${calculateAverageSalary().toLocaleString()}`);

console.log("\n--- 7. Updating Employee (Aditya to 70000) ---");
updateEmployee(1, { salary: 70000 });
console.log("Updated record:", findEmployeeById(1));

console.log("\n--- 8. Sorting Employees by Salary (Highest → Lowest) ---");
const sortedEmployees = sortEmployeesBySalaryDesc();
displayEmployees(sortedEmployees);

console.log("\n--- 9. Removing Employee (ID 5) ---");
removeEmployee(5);
displayEmployees();

console.log("\n===== DONE =====");

