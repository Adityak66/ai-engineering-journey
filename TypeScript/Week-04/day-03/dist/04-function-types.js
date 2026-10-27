"use strict";
// ==========================================
// 04-function-types.ts — Function Type Signatures
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Assigning implementation adhering to the SalaryCalculator signature
const calculateTotal = (salary, bonus) => {
    return salary + bonus;
};
console.log("=== 04-function-types ===");
console.log("calculateTotal(50000, 5000):", calculateTotal(50000, 5000));
// 3. Alternate implementation sharing the exact same function signature
const calculateDeduction = (salary, tax) => {
    return salary - tax;
};
console.log("calculateDeduction(50000, 7500):", calculateDeduction(50000, 7500));
const isHighPaidEngineer = (dept, minSalary) => {
    return dept === "Engineering" && minSalary >= 70000;
};
console.log("Is Engineering with 75k high paid?", isHighPaidEngineer("Engineering", 75000));
console.log("Is HR with 50k high paid?", isHighPaidEngineer("HR", 50000));
