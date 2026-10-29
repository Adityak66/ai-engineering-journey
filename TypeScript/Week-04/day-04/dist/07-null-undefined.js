"use strict";
// ==========================================
// 07-null-undefined.ts — Null Safety with strictNullChecks
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 07-null-undefined ===");
// 1. Explicitly nullable variable
let employeeName = null;
console.log("Initial employeeName:", employeeName);
employeeName = "Rahul";
console.log("Assigned employeeName:", employeeName);
employeeName = null; // ✅ Allowed because null is in the union
console.log("Reset employeeName to null:", employeeName);
// ❌ TypeScript error with strictNullChecks enabled:
// employeeName = undefined; // Error: Type 'undefined' is not assignable to type 'string | null'.
// 2. Variable with undefined
let department;
console.log("Uninitialized department:", department);
department = "IT";
console.log("Assigned department:", department);
const employee = {
    id: 101,
    name: "Rahul"
};
// Reading optional property safely
if (employee.email !== undefined) {
    console.log("Email:", employee.email.toLowerCase());
}
else {
    console.log("Email is not registered for:", employee.name);
}
