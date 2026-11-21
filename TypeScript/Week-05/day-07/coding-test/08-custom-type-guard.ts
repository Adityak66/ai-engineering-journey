// 08-custom-type-guard.ts
// Runtime validation of uncertain 'unknown' inputs using a type predicate.

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Validates that an unknown value satisfies the Employee interface at runtime
function isEmployee(value: unknown): value is Employee {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const record = value as Record<string, unknown>;
    return (
        typeof record.id === "number" &&
        Number.isFinite(record.id) &&
        typeof record.name === "string" &&
        record.name.trim().length > 0 &&
        typeof record.salary === "number" &&
        Number.isFinite(record.salary) &&
        typeof record.department === "string" &&
        typeof record.isActive === "boolean"
    );
}

const validPayload: unknown = {
    id: 1,
    name: "Rahul",
    salary: 50000,
    department: "IT",
    isActive: true
};

const invalidPayload: unknown = {
    id: "bad-id",
    name: "Unknown"
};

if (isEmployee(validPayload)) {
    console.log("Valid employee:", validPayload.name, validPayload.salary);
}

if (!isEmployee(invalidPayload)) {
    console.log("Rejected invalid payload safely");
}

export type { Employee };
export { isEmployee };
