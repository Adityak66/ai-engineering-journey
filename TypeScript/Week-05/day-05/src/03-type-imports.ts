// 03-type-imports.ts
// Demonstrating the distinction between runtime imports and compile-time type-only imports.

// 'import type' ensures that the imported symbol is completely stripped from compiled JavaScript
import type { Employee, Manager } from "./models/employee";

// Standard import for runtime functions and default exports
import getCompanyName, { getEmployeeName } from "./models/employee";

const sampleEmployee: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

const leadManager: Manager = {
    id: 102,
    name: "Sarah",
    salary: 85000,
    teamSize: 5
};

console.log("Company Name (Default Export):", getCompanyName());
console.log("Employee Name (Named Export):", getEmployeeName(sampleEmployee));
console.log("Manager Team Size:", leadManager.teamSize);

// Why 'import type' matters:
// 1. Zero runtime bundle weight: TypeScript compiler guarantees no code emission for type-only imports.
// 2. Eliminates circular dependency issues caused by cross-referencing types across files.
// 3. Clear architectural intent separating type definitions from executable logic.

export {};
