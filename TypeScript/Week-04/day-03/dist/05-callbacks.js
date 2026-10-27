"use strict";
// ==========================================
// 05-callbacks.ts — Typed Callback Signatures
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Higher-order function accepting a typed callback
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log("=== 05-callbacks ===");
// Passing addition callback
const sum = calculate(10, 5, (x, y) => x + y);
console.log("Addition callback:", sum); // 15
// Passing multiplication callback
const product = calculate(10, 5, (x, y) => x * y);
console.log("Multiplication callback:", product); // 50
function processEmployee(emp, formatter) {
    const netPay = emp.salary * 0.85; // after 15% tax
    return formatter(emp.id, emp.name, netPay);
}
const sampleEmp = { id: 101, name: "Priya", salary: 60000 };
const payslip = processEmployee(sampleEmp, (id, name, netPay) => {
    return `PaySlip #${id} | ${name} | Net: ₹${netPay}`;
});
console.log("Processed Employee:", payslip);
