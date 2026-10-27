"use strict";
// ==========================================
// 08-type-narrowing.ts — Type Narrowing with typeof & Function Factories
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 08-type-narrowing ===");
// 1. Type narrowing with typeof: checking types at runtime narrows them at compile-time
function formatEmployeeId(id) {
    if (typeof id === "number") {
        // TypeScript knows 'id' is strictly a number in this branch
        return `EMP-${id}`;
    }
    // TypeScript knows 'id' is strictly a string here
    return id.toUpperCase();
}
console.log("Formatted numeric ID:", formatEmployeeId(101)); // EMP-101
console.log("Formatted string ID:", formatEmployeeId("emp-102")); // EMP-102
// 2. Return-type consistency: TypeScript enforces that all branches return declared type
function getEmployeeCount(isActive) {
    if (isActive) {
        return 10;
    }
    return 0;
    // return "None"; // ❌ Error: Type 'string' is not assignable to type 'number'.
}
console.log("Active count:", getEmployeeCount(true));
console.log("Inactive count:", getEmployeeCount(false));
// 3. Functions returning functions (Higher-Order Function Factory)
function createMultiplier(factor) {
    return (value) => value * factor;
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log("Double 10:", double(10)); // 20
console.log("Triple 10:", triple(10)); // 30
