// src/employeeService.ts
// Employee CRUD, filtering, and sorting business logic using immutable patterns.

import type { Employee, EmployeeId, CreateEmployee, UpdateEmployee, Department } from "./types";

// Adds a new employee to the roster immutably, rejecting duplicate IDs
export function addEmployee(
    employees: Employee[],
    employee: Employee
): Employee[] {
    const exists = employees.some(emp => emp.id === employee.id);
    if (exists) {
        throw new Error("Employee ID already exists");
    }
    return [...employees, employee];
}

// Finds an employee by ID using strict equality to preserve number vs string distinction
export function getEmployeeById(
    employees: Employee[],
    id: EmployeeId
): Employee | undefined {
    return employees.find(emp => emp.id === id);
}

// Immutably updates an employee record by creating a new array and merged object
export function updateEmployee(
    employees: Employee[],
    id: EmployeeId,
    changes: UpdateEmployee
): Employee[] {
    const exists = employees.some(emp => emp.id === id);
    if (!exists) {
        throw new Error("Employee not found");
    }
    return employees.map(emp =>
        emp.id === id ? { ...emp, ...changes } : emp
    );
}

// Immutably removes an employee by ID
export function deleteEmployee(
    employees: Employee[],
    id: EmployeeId
): Employee[] {
    const exists = employees.some(emp => emp.id === id);
    if (!exists) {
        throw new Error("Employee not found");
    }
    return employees.filter(emp => emp.id !== id);
}

// Filters employees belonging to a specified department
export function filterByDepartment(
    employees: Employee[],
    department: Department
): Employee[] {
    return employees.filter(emp => emp.department === department);
}

// Returns a new sorted array ordered by salary ascending or descending
export function sortBySalary(
    employees: Employee[],
    order: "asc" | "desc" = "asc"
): Employee[] {
    return [...employees].sort((a, b) => {
        return order === "asc" ? a.salary - b.salary : b.salary - a.salary;
    });
}
