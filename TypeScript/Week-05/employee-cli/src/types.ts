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
