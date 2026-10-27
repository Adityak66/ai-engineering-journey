// ==========================================
// 03-arrow-functions.ts — Typed Arrow Functions
// ==========================================

export {};

// 1. Block body typed arrow function
const calculateSalary = (salary: number, bonus: number): number => {
    return salary + bonus;
};

console.log("=== 03-arrow-functions ===");
console.log("calculateSalary(50000, 5000):", `₹${calculateSalary(50000, 5000)}`);

// 2. Concise body typed arrow function
const calculateAnnualSalary = (monthlySalary: number): number => monthlySalary * 12;

console.log("calculateAnnualSalary(60000):", `₹${calculateAnnualSalary(60000)}`);

// 3. Arrow function returning formatted string
const formatEmployeeTag = (id: number, name: string, dept: string): string =>
    `[#${id}] ${name.toUpperCase()} - Dept: ${dept}`;

console.log(formatEmployeeTag(101, "Aditya", "Engineering"));
