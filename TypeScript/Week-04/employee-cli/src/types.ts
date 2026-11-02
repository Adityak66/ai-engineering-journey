// Domain types and interfaces for the Employee Management System

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
    id: EmployeeId;
    name: string;
    salary: number;
    department: Department;
    isActive: boolean;
    email?: string;
    // Date stored as ISO string (YYYY-MM-DD) for simple CLI formatting and JSON parsing
    joiningDate?: string;
}

export interface EmployeeUpdate {
    name?: string;
    salary?: number;
    department?: Department;
    isActive?: boolean;
    email?: string;
    joiningDate?: string;
}
