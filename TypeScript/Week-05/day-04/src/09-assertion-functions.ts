// 09-assertion-functions.ts
// Assertion functions for fail-fast validation using 'asserts condition' and 'asserts val is Type'.

interface Employee {
    id: number;
    name: string;
    salary: number;
}

// 1. General boolean assertion function
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
}

// 2. Type assertion function with type predicate
function assertIsEmployee(value: unknown): asserts value is Employee {
    if (typeof value !== "object" || value === null) {
        throw new Error("Validation error: value must be a non-null object");
    }
    const candidate = value as Record<string, unknown>;
    if (typeof candidate.id !== "number") {
        throw new Error("Validation error: employee 'id' must be a number");
    }
    if (typeof candidate.name !== "string") {
        throw new Error("Validation error: employee 'name' must be a string");
    }
    if (typeof candidate.salary !== "number") {
        throw new Error("Validation error: employee 'salary' must be a number");
    }
}

// Demonstration
const incomingPayload: unknown = { id: 101, name: "Rahul", salary: 50000 };

// Once assertIsEmployee completes without throwing, incomingPayload is narrowed to Employee
assertIsEmployee(incomingPayload);
console.log(`Validated staff member: [${incomingPayload.id}] ${incomingPayload.name} ($${incomingPayload.salary})`);

const count: number = 5;
assert(count > 0, "Count must be positive");
console.log("Count assertion passed:", count);

export type { Employee };
export { assert, assertIsEmployee };
