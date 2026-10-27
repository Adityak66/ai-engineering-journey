"use strict";
// ==========================================
// 03-arrow-functions.ts — Typed Arrow Functions
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Block body typed arrow function
const calculateSalary = (salary, bonus) => {
    return salary + bonus;
};
console.log("=== 03-arrow-functions ===");
console.log("calculateSalary(50000, 5000):", `₹${calculateSalary(50000, 5000)}`);
// 2. Concise body typed arrow function
const calculateAnnualSalary = (monthlySalary) => monthlySalary * 12;
console.log("calculateAnnualSalary(60000):", `₹${calculateAnnualSalary(60000)}`);
// 3. Arrow function returning formatted string
const formatEmployeeTag = (id, name, dept) => `[#${id}] ${name.toUpperCase()} - Dept: ${dept}`;
console.log(formatEmployeeTag(101, "Aditya", "Engineering"));
