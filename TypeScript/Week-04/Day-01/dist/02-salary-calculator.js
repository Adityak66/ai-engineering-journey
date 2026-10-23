"use strict";
// ==========================================
// 02-salary-calculator.ts — Number Operations & Safety
// ==========================================
let monthlySalary = 50000;
let bonus = 5000;
let totalSalary = monthlySalary + bonus;
console.log("=== 02-salary-calculator ===");
console.log(`Monthly Salary: ₹${monthlySalary}`);
console.log(`Bonus: ₹${bonus}`);
console.log(`Total salary: ₹${totalSalary}`);
// ❌ Compile-time error prevention:
// If you uncomment this line, TypeScript will reject compilation:
// monthlySalary = "sixty thousand"; // Error: Type 'string' is not assignable to type 'number'.
