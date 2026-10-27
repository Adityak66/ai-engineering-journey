"use strict";
// ==========================================
// 09-final-practice.ts — 8 Comprehensive Function Exercises
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=================================================");
console.log("🚀 TYPESCRIPT DAY 03: 8 FINAL PRACTICE CHALLENGES");
console.log("=================================================\n");
const sampleStaff = [
    { id: 101, name: "Aditya Sharma", salary: 80000, department: "Engineering" },
    { id: 102, name: "Priya Rao", salary: 65000, department: "Design" },
    { id: 103, name: "Rahul Deshmukh", salary: 75000, department: "Engineering" },
    { id: 104, name: "Sneha Patel", salary: 55000, department: "HR" }
];
// ----------------------------------------------------------------------------
// 1. Salary Calculator: Accept salary and bonus, return total as number
// ----------------------------------------------------------------------------
function calculateTotalCompensation(base, bonus) {
    return base + bonus;
}
console.log("[Ex 1] Total Compensation (80k + 12k):", `₹${calculateTotalCompensation(80000, 12000)}`);
// ----------------------------------------------------------------------------
// 2. Find Employee by ID: Return Employee | undefined
// ----------------------------------------------------------------------------
function findEmployeeById(employees, id) {
    return employees.find(emp => emp.id === id);
}
const empFound = findEmployeeById(sampleStaff, 101);
const empMissing = findEmployeeById(sampleStaff, 999);
console.log("[Ex 2] Found Employee 101:", empFound?.name ?? "Not Found");
console.log("[Ex 2] Missing Employee 999:", empMissing?.name ?? "Not Found");
// ----------------------------------------------------------------------------
// 3. Filter by Department: Accept typed array and department name
// ----------------------------------------------------------------------------
function filterByDepartment(employees, dept) {
    return employees.filter(emp => emp.department.toLowerCase() === dept.toLowerCase());
}
const engineeringTeam = filterByDepartment(sampleStaff, "Engineering");
console.log("[Ex 3] Engineering Staff:", engineeringTeam.map(e => e.name).join(", "));
// ----------------------------------------------------------------------------
// 4. Average Salary: Returns 0 for an empty array
// ----------------------------------------------------------------------------
function calculateAverageSalary(employees) {
    if (employees.length === 0)
        return 0;
    const total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    return Math.round(total / employees.length);
}
console.log("[Ex 4] Team Average Salary:", `₹${calculateAverageSalary(sampleStaff)}`);
console.log("[Ex 4] Empty Array Average:", `₹${calculateAverageSalary([])}`);
// ----------------------------------------------------------------------------
// 5. Callback Function: Accept two numbers and typed callback
// ----------------------------------------------------------------------------
function executeMath(x, y, computation) {
    return computation(x, y);
}
const maxVal = executeMath(25, 40, (a, b) => Math.max(a, b));
console.log("[Ex 5] Callback Math.max(25, 40):", maxVal);
// ----------------------------------------------------------------------------
// 6. Arrow Function with explicit parameter and return types
// ----------------------------------------------------------------------------
const formatTaxRecord = (name, salary) => {
    const tax = Math.round(salary * 0.15);
    return `Employee: ${name} | Tax Withholding (15%): ₹${tax}`;
};
console.log("[Ex 6] Typed Arrow:", formatTaxRecord("Aditya", 80000));
// ----------------------------------------------------------------------------
// 7. Union Type: Accept string | number ID and format safely
// ----------------------------------------------------------------------------
function normalizeEmployeeIdentifier(id) {
    if (typeof id === "number") {
        return `ID-${id.toString().padStart(4, "0")}`;
    }
    return `ID-${id.trim().toUpperCase()}`;
}
console.log("[Ex 7] Normalized Numeric ID (42):", normalizeEmployeeIdentifier(42));
console.log("[Ex 7] Normalized String ID ('emp-88'):", normalizeEmployeeIdentifier("emp-88"));
// ----------------------------------------------------------------------------
// 8. Optional and default parameters: Greeting with optional dept & default role
// ----------------------------------------------------------------------------
function generateEmployeeGreeting(name, department, role = "Associate") {
    const deptInfo = department ? ` in ${department}` : "";
    return `Welcome, ${name}! You are registered as ${role}${deptInfo}.`;
}
console.log("[Ex 8] All parameters:", generateEmployeeGreeting("Rahul", "Engineering", "Senior Lead"));
console.log("[Ex 8] Default role:", generateEmployeeGreeting("Priya", "HR"));
console.log("[Ex 8] Minimal (only name):", generateEmployeeGreeting("Aditya"));
console.log("\n=================================================");
console.log("🏁 ALL 8 CODING CHALLENGES VERIFIED SUCCESSFULLY!");
console.log("=================================================");
