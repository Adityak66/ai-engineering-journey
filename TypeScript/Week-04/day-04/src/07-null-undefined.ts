// 07-null-undefined.ts — Null Safety with strictNullChecks

export {};

console.log("=== 07-null-undefined ===");

// 1. Explicitly nullable variable
let employeeName: string | null = null;
console.log("Initial employeeName:", employeeName);

employeeName = "Rahul";
console.log("Assigned employeeName:", employeeName);

employeeName = null; // ✅ Allowed because null is in the union
console.log("Reset employeeName to null:", employeeName);

// TypeScript error with strictNullChecks enabled:
// employeeName = undefined; // Error: Type 'undefined' is not assignable to type 'string | null'.

// 2. Variable with undefined
let department: string | undefined;
console.log("Uninitialized department:", department);

department = "IT";
console.log("Assigned department:", department);

// 3. Optional properties in interfaces
interface Employee {
    id: number;
    name: string;
    email?: string; // string | undefined
}

const employee: Employee = {
    id: 101,
    name: "Rahul"
};

// Reading optional property safely
if (employee.email !== undefined) {
    console.log("Email:", employee.email.toLowerCase());
} else {
    console.log("Email is not registered for:", employee.name);
}
