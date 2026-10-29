"use strict";
// ==========================================
// 03-intersection-types.ts — Intersection Types (&)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};
console.log("=== 03-intersection-types ===");
console.log(`Paid Employee: ${employee.name} (ID: ${employee.id}) earns ₹${employee.salary}`);
const fullRecord = {
    id: 102,
    name: "Aditya",
    salary: 80000,
    department: "AI Engineering"
};
console.log(`Full Record: ${fullRecord.name} in ${fullRecord.department}`);
/*
    🧠 Union (|) vs Intersection (&):
    - Union (|): An "OR" relationship. The value must satisfy at least one type in the union.
    - Intersection (&): An "AND" relationship. The object must satisfy ALL combined types simultaneously.
*/
