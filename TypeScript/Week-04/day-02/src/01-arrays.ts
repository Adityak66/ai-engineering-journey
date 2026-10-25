// ==========================================
// 01-arrays.ts — Typed Arrays and Readonly Arrays
// ==========================================

export {};

// 1. Typed Arrays using standard syntax (T[]) and generic syntax (Array<T>)
let salaries: number[] = [30000, 40000, 50000];
let names: Array<string> = ["Rahul", "Priya"];

console.log("=== 01-arrays ===");
console.log("First salary:", salaries[0]);
console.log("Second name:", names[1]);

// 2. Boolean array
let attendanceFlags: boolean[] = [true, false, true, true];
console.log("Attendance count:", attendanceFlags.length);

// 3. Array of Employee Objects
let employees: { id: number; name: string; salary: number }[] = [
    { id: 1, name: "Rahul", salary: 50000 },
    { id: 2, name: "Priya", salary: 60000 }
];

console.log("Employees list:", employees);

// 4. Readonly Arrays: Prevents mutating operations (push, pop, splice, direct index assignment)
const readonlySalaries: readonly number[] = [30000, 40000, 50000];
console.log("Readonly salary at index 0:", readonlySalaries[0]);

// ❌ The compiler prevents mutating readonly arrays:
// readonlySalaries.push(60000); // Error: Property 'push' does not exist on type 'readonly number[]'.
// readonlySalaries[0] = 35000;  // Error: Index signature in type 'readonly number[]' only permits reading.
