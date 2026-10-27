"use strict";
// ==========================================
// 07-union-types.ts — Union Types (number | string)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 07-union-types ===");
// 1. Variable holding a union of alternative types
let employeeId;
employeeId = 101;
console.log("Numeric ID:", employeeId);
employeeId = "EMP-101";
console.log("String ID:", employeeId);
function updateApplicationStatus(id, status) {
    return `Application [${id}] set to status: ${status.toUpperCase()}`;
}
console.log(updateApplicationStatus(101, "approved"));
console.log(updateApplicationStatus("APP-902", "pending"));
