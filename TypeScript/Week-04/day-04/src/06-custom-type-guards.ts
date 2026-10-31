// 06-custom-type-guards.ts — Custom Type Predicates (value is Type)

export {};

console.log("=== 06-custom-type-guards ===");

interface Employee {
    id: number;
    name: string;
    salary: number;
}

// A custom type guard uses the 'value is Type' return signature.
// When this function returns true, TypeScript narrows the variable's type in that scope!
function isEmployee(value: unknown): value is Employee {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    // Verify required property existence
    if (!("id" in value) || !("name" in value) || !("salary" in value)) {
        return false;
    }

    // Verify property data types at runtime
    const candidate = value as Record<string, unknown>;
    return (
        typeof candidate.id === "number" &&
        typeof candidate.name === "string" &&
        typeof candidate.salary === "number"
    );
}

// Simulating uncertain data from an external REST API
const apiPayload1: unknown = { id: 1, name: "Rahul", salary: 50000 };
const apiPayload2: unknown = { id: 2, name: "Invalid User" }; // missing salary

if (isEmployee(apiPayload1)) {
    // Inside this block, apiPayload1 is safely narrowed to Employee!
    console.log("apiPayload1 is a valid Employee:", apiPayload1.name, `(Salary: ₹${apiPayload1.salary})`);
} else {
    console.log("apiPayload1 is NOT a valid Employee.");
}

if (isEmployee(apiPayload2)) {
    console.log("apiPayload2 is a valid Employee:", apiPayload2.name);
} else {
    console.log("apiPayload2 validation failed: Missing required Employee fields.");
}
