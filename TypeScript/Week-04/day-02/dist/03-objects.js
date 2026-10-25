"use strict";
// ==========================================
// 03-objects.ts — Object Type Annotations, Optional & Readonly
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Object type annotation with required properties
let employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    isActive: true
};
console.log("=== 03-objects ===");
console.log("Employee Name:", employee.name);
console.log("Employee Salary:", employee.salary);
// 2. Optional properties using '?'
let employeeWithOptional = {
    id: 102,
    name: "Priya"
};
console.log("Employee without email:", employeeWithOptional.name, "| Email:", employeeWithOptional.email);
// 3. Readonly properties: prevent direct reassignment
let readonlyEmployee = {
    id: 103,
    name: "Aditya"
};
readonlyEmployee.name = "Aditya K"; // ✅ Allowed
console.log("Updated name:", readonlyEmployee.name);
// ❌ Cannot reassign readonly property:
// readonlyEmployee.id = 104; // Error: Cannot assign to 'id' because it is a read-only property.
