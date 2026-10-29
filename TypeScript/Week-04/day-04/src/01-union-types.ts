// ==========================================
// 01-union-types.ts — Union Types (|)
// ==========================================

export {};

// A union type represents a value that can be one of several permitted types
type EmployeeId = number | string;

let employeeId: EmployeeId;

employeeId = 101;         // ✅ Valid: number
console.log("=== 01-union-types ===");
console.log("Numeric Employee ID:", employeeId);

employeeId = "EMP-101";   // ✅ Valid: string
console.log("String Employee ID:", employeeId);

// ❌ TypeScript compiler error (uncomment to see error):
// employeeId = true; // Error: Type 'boolean' is not assignable to type 'EmployeeId'.

// Union in function parameters
function displayIdentifier(id: EmployeeId): void {
    console.log(`Identifier verified: ${id}`);
}

displayIdentifier(202);
displayIdentifier("EMP-ALPHA-9");
