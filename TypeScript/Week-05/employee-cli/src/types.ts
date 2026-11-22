// src/types.ts
// Domain contracts and types for Employee Management CLI (Week 5 Version 2)

export type EmployeeId = number | string;

export type Department = "IT" | "HR" | "Finance" | "Sales";

export const VALID_DEPARTMENTS: readonly Department[] = [
    "IT",
    "HR",
    "Finance",
    "Sales"
];

// Type guard to validate whether an arbitrary string matches the Department union
export function isValidDepartment(dept: string): dept is Department {
    return VALID_DEPARTMENTS.includes(dept as Department);
}

export interface Employee {
    readonly id: EmployeeId;
    name: string;
    salary: number;
    department: Department;
    isActive: boolean;
    email?: string;
    joiningDate?: string;
}

// Utility types: new employees omit the id; updates allow partial modifications of non-id fields
export type CreateEmployee = Omit<Employee, "id">;
export type UpdateEmployee = Partial<Omit<Employee, "id">>;
export type EmployeeSummary = Pick<Employee, "id" | "name" | "department">;

// Runtime type guard verifying an unknown payload conforms to Employee
export function isEmployee(value: unknown): value is Employee {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const record = value as Record<string, unknown>;
    const hasValidId =
        (typeof record.id === "number" && Number.isFinite(record.id)) ||
        (typeof record.id === "string" && record.id.trim().length > 0);

    return (
        hasValidId &&
        typeof record.name === "string" &&
        record.name.trim().length > 0 &&
        typeof record.salary === "number" &&
        Number.isFinite(record.salary) &&
        record.salary >= 0 &&
        typeof record.department === "string" &&
        isValidDepartment(record.department) &&
        typeof record.isActive === "boolean" &&
        (record.email === undefined || typeof record.email === "string") &&
        (record.joiningDate === undefined || typeof record.joiningDate === "string")
    );
}
