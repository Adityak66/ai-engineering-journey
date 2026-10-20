// coding-test/arrays-map-set.js — Exercise 8 & 9: Array Methods, Set, and Map

const employees = [
    { id: 101, name: "Aditya", department: "Engineering", salary: 75000 },
    { id: 102, name: "Sarah", department: "Design", salary: 65000 },
    { id: 103, name: "Rahul", department: "Engineering", salary: 80000 },
    { id: 104, name: "Priya", department: "HR", salary: 55000 }
];

console.log("=== 1. Array Transformations ===");

// Filter: Engineering only
const engineeringStaff = employees.filter(e => e.department === "Engineering");
console.log("Engineering team:", engineeringStaff.map(e => e.name));

// Map: Apply 10% bonus (immutable)
const withBonus = employees.map(e => ({
    ...e,
    bonusSalary: Math.round(e.salary * 1.10)
}));
console.log("Salaries with 10% bonus:", withBonus.map(e => `${e.name}: ₹${e.bonusSalary}`));

// Reduce: Calculate Total & Average Salary
const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
const averageSalary = Math.round(totalSalary / employees.length);
console.log(`Total Payroll: ₹${totalSalary} | Average Salary: ₹${averageSalary}`);

console.log("\n=== 2. Set (Unique Departments) ===");
const rawDepartments = ["Engineering", "Design", "Engineering", "HR", "Design", "Operations"];
const uniqueDepartments = [...new Set(rawDepartments)];
console.log("Deduplicated Departments with Set:", uniqueDepartments);

console.log("\n=== 3. Map (Fast Key-Value Lookups) ===");
const employeeMap = new Map();
employees.forEach(emp => employeeMap.set(emp.id, emp));

console.log("Map size:", employeeMap.size);
console.log("Lookup ID 103:", employeeMap.get(103)?.name); // Rahul
console.log("Has ID 999?:", employeeMap.has(999));         // false
