// src/models/employee.ts
// Domain models and helper functions for Employee management.

export interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    email?: string;
}

// Interface inheritance: Manager inherits all Employee properties and adds teamSize
export interface Manager extends Employee {
    teamSize: number;
}

// Developer extension adding specialized skills array
export interface Developer extends Employee {
    skills: string[];
}

// Function exported as a runtime value
export function getEmployeeName(employee: Employee): string {
    return employee.name;
}

// Default export representing company metadata
export default function getCompanyName(): string {
    return "Enterprise Solutions Inc.";
}
