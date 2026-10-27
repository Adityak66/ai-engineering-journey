// ==========================================
// 07-union-types.ts — Union Types (number | string)
// ==========================================

export {};

console.log("=== 07-union-types ===");

// 1. Variable holding a union of alternative types
let employeeId: number | string;

employeeId = 101;
console.log("Numeric ID:", employeeId);

employeeId = "EMP-101";
console.log("String ID:", employeeId);

// ❌ TypeScript rejects types outside the declared union:
// employeeId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

// 2. Union types in function parameters & return types
type Status = "pending" | "approved" | "rejected";

function updateApplicationStatus(id: number | string, status: Status): string {
    return `Application [${id}] set to status: ${status.toUpperCase()}`;
}

console.log(updateApplicationStatus(101, "approved"));
console.log(updateApplicationStatus("APP-902", "pending"));
