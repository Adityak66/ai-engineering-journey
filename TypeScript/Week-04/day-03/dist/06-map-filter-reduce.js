"use strict";
// ==========================================
// 06-map-filter-reduce.ts — Higher-Order Array Methods with Types
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 06-map-filter-reduce ===");
// 1. Primitive Array Transformations
const salaries = [30000, 40000, 50000, 65000];
// map(): transforms T -> U
const doubled = salaries.map((salary) => salary * 2);
// filter(): predicate returning boolean
const highSalaries = salaries.filter((salary) => salary >= 40000);
// reduce(): accumulator aggregation
const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
console.log("Doubled:", doubled);
console.log("High Salaries (>= 40k):", highSalaries);
console.log("Total Salary:", totalSalary);
const employees = [
    { id: 1, name: "Rahul", salary: 45000, department: "IT" },
    { id: 2, name: "Priya", salary: 60000, department: "HR" },
    { id: 3, name: "Aditya", salary: 75000, department: "Engineering" },
    { id: 4, name: "Sarah", salary: 52000, department: "IT" }
];
// a) map() to extract employee names
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);
// b) filter() to find employees with salary above ₹50,000
const wellCompensated = employees.filter(emp => emp.salary > 50000);
console.log("Salaries > 50k:", wellCompensated.map(e => `${e.name} (₹${e.salary})`));
// c) reduce() to calculate total payroll
const totalEmployeePayroll = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(`Total Employee Payroll: ₹${totalEmployeePayroll}`);
