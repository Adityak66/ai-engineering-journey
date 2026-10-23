// ==========================================
// 06-valid-invalid-types.ts — Valid vs Invalid Assignments
// ==========================================

export {};

let employeeAge: number = 25;

// ✅ Valid: Reassigning a number to a number variable
employeeAge = 26;

console.log("=== 06-valid-invalid-types ===");
console.log("Valid age update:", employeeAge);

// ❌ Invalid: Uncommenting the line below prevents compilation under `noEmitOnError: true`:
// employeeAge = "twenty-six"; // Error: Type 'string' is not assignable to type 'number'.
