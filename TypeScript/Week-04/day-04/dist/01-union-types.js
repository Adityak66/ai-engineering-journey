"use strict";
// ==========================================
// 01-union-types.ts — Union Types (|)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
let employeeId;
employeeId = 101; // ✅ Valid: number
console.log("=== 01-union-types ===");
console.log("Numeric Employee ID:", employeeId);
employeeId = "EMP-101"; // ✅ Valid: string
console.log("String Employee ID:", employeeId);
// ❌ TypeScript compiler error (uncomment to see error):
// employeeId = true; // Error: Type 'boolean' is not assignable to type 'EmployeeId'.
// Union in function parameters
function displayIdentifier(id) {
    console.log(`Identifier verified: ${id}`);
}
displayIdentifier(202);
displayIdentifier("EMP-ALPHA-9");
