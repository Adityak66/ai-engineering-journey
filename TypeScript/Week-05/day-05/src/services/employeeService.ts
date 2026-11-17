// src/services/employeeService.ts
// Domain service layer encapsulating business logic and calculations for employees.

import type { Employee } from "../models/employee";

// Calculates total salary by combining base salary and performance bonus
export function calculateSalary(salary: number, bonus: number): number {
    return salary + bonus;
}

// Filters employees earning at or above the designated minimum threshold
export function filterEmployees(
    employees: Employee[],
    minimumSalary: number
): Employee[] {
    return employees.filter(employee => employee.salary >= minimumSalary);
}
