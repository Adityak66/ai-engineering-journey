// 01-generic-basics.ts
// Introduction to TypeScript Generics: creating reusable functions while preserving type safety.

// Without generics: using 'any' loses compile-time type safety
function getUnsafeValue(value: any): any {
    return value;
}

const unsafeString = getUnsafeValue("Aditya");
// TypeScript cannot warn us here at compile time, leading to potential runtime errors:
// unsafeString.toFixed(); // Runtime TypeError!

// With generics: the type parameter 'T' captures the argument type and ensures
// the return value matches that exact type without type assertion.
function identity<T>(value: T): T {
    return value;
}

// 1. Explicitly passing string type argument
const nameResult = identity<string>("Aditya");
console.log("String identity:", nameResult.toUpperCase());

// 2. Explicitly passing number type argument
const ageResult = identity<number>(22);
console.log("Number identity:", ageResult.toFixed(0));

// 3. Explicitly passing boolean type argument
const flagResult = identity<boolean>(true);
console.log("Boolean identity:", flagResult ? "Active" : "Inactive");

// 4. Using generics with an object type
interface EmployeeProfile {
    id: number;
    name: string;
    department: string;
}

const employee: EmployeeProfile = {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering"
};

const employeeResult = identity<EmployeeProfile>(employee);
console.log("Employee identity:", employeeResult.name, `(${employeeResult.department})`);

export {};
