// 07-type-guards.ts
// Runtime type narrowing using typeof, instanceof, in operator, and custom type predicates.

interface Employee {
    name: string;
    salary: number;
}

interface Customer {
    name: string;
    loyaltyPoints: number;
}

// 1. typeof type guard (for primitive values)
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return `$${value.toFixed(2)}`;
}

// 2. instanceof type guard (for class instances)
function formatTimestamp(value: Date | string): string {
    if (value instanceof Date) {
        return value.toISOString();
    }
    return value;
}

// 3. 'in' operator type guard (for object property presence)
function printEntityDetails(entity: Employee | Customer): void {
    if ("salary" in entity) {
        console.log(`Employee ${entity.name} earns $${entity.salary}`);
    } else {
        console.log(`Customer ${entity.name} has ${entity.loyaltyPoints} points`);
    }
}

// 4. Custom type guard with type predicate 'value is Employee'
function isEmployee(value: unknown): value is Employee {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidate = value as Record<string, unknown>;
    return (
        typeof candidate.name === "string" &&
        typeof candidate.salary === "number"
    );
}

// Validating uncertain input at runtime
const externalPayload: unknown = { name: "Rahul", salary: 50000 };

if (isEmployee(externalPayload)) {
    // Inside this block, TypeScript knows externalPayload is Employee
    console.log("Validated Employee:", externalPayload.name, externalPayload.salary);
} else {
    console.log("Input is not a valid Employee");
}

console.log("Formatted value:", formatValue("engineering"));
console.log("Formatted date:", formatTimestamp(new Date()));
printEntityDetails({ name: "Rahul", salary: 50000 });
printEntityDetails({ name: "Priya", loyaltyPoints: 340 });

export { formatValue, formatTimestamp, printEntityDetails, isEmployee };
export type { Employee, Customer };
