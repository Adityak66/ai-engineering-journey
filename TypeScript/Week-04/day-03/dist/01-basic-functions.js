"use strict";
// ==========================================
// 01-basic-functions.ts — Function Parameters and Return Types
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic typed function: parameters and return type
function add(a, b) {
    return a + b;
}
console.log("=== 01-basic-functions ===");
console.log("add(10, 20):", add(10, 20)); // 30
// 2. Practice: Calculate Employee's Annual Salary
function calculateAnnualSalary(monthlySalary) {
    return monthlySalary * 12;
}
console.log("Annual Salary for ₹50,000/mo:", `₹${calculateAnnualSalary(50000)}`);
// 3. Practice: Calculate Bonus
function calculateBonus(salary, bonusPercentage) {
    return (salary * bonusPercentage) / 100;
}
console.log("15% Bonus on ₹60,000:", `₹${calculateBonus(60000, 15)}`);
// 4. Practice: Build Full Name
function buildFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log("Full Name:", buildFullName("Rahul", "Sharma"));
