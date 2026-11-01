import type { Employee } from "../models/employee";

export function calculateSalary(salary: number, bonus: number): number {
    return salary + bonus;
}

export function filterEmployees(employees: Employee[], minimumSalary: number): Employee[] {
    return employees.filter((employee) => employee.salary >= minimumSalary);
}
