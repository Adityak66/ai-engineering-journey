// src/salaryUtils.ts
// Salary calculation and aggregation utilities for employee records.

import type { Employee } from "./types";

// Calculates total payroll across all employees using Array.prototype.reduce
export function calculateTotalSalary(employees: Employee[]): number {
    return employees.reduce(
        (total, emp) => total + emp.salary,
        0
    );
}

// Calculates average salary, guarding against division by zero on empty lists
export function calculateAverageSalary(employees: Employee[]): number {
    if (employees.length === 0) {
        return 0;
    }
    return calculateTotalSalary(employees) / employees.length;
}

// Finds the employee with the highest salary; returns undefined if list is empty
export function findHighestPaidEmployee(employees: Employee[]): Employee | undefined {
    if (employees.length === 0) {
        return undefined;
    }
    return employees.reduce((highest, current) =>
        current.salary > highest.salary ? current : highest
    );
}

// Returns only active employees using Array.prototype.filter
export function getActiveEmployees(employees: Employee[]): Employee[] {
    return employees.filter(emp => emp.isActive);
}
