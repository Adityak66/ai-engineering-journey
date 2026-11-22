// src/employeeService.ts
// Employee CRUD, filtering, and sorting business logic using immutable patterns.

import type { Employee, EmployeeId, CreateEmployee, UpdateEmployee, Department } from "./types";

// Generic ID lookup shared across repository operations to avoid duplicate predicates
export function findById<T extends { id: EmployeeId }>(
    items: readonly T[],
    id: EmployeeId
): T | undefined {
    return items.find(item => item.id === id);
}

// Adds a new employee to the roster immutably, rejecting duplicate IDs and invalid inputs
export function addEmployee(
    employees: readonly Employee[],
    employee: Employee
): Employee[] {
    if (findById(employees, employee.id) !== undefined) {
        throw new Error("Employee ID already exists");
    }
    if (!employee.name.trim()) {
        throw new Error("Employee name cannot be empty");
    }
    if (!Number.isFinite(employee.salary) || employee.salary < 0) {
        throw new Error("Salary must be a valid non-negative number");
    }
    return [...employees, employee];
}

// Creates and adds an employee from a CreateEmployee DTO plus explicit ID
export function createEmployee(
    employees: readonly Employee[],
    id: EmployeeId,
    input: CreateEmployee
): Employee[] {
    const newEmployee: Employee = { id, ...input };
    return addEmployee(employees, newEmployee);
}

// Finds an employee by ID using strict equality to preserve number vs string distinction
export function getEmployeeById(
    employees: readonly Employee[],
    id: EmployeeId
): Employee | undefined {
    return findById(employees, id);
}

// Immutably updates an employee record by creating a new array and merged object
export function updateEmployee(
    employees: readonly Employee[],
    id: EmployeeId,
    changes: UpdateEmployee
): Employee[] {
    if (findById(employees, id) === undefined) {
        throw new Error("Employee not found");
    }
    if (changes.name !== undefined && !changes.name.trim()) {
        throw new Error("Employee name cannot be empty");
    }
    if (changes.salary !== undefined && (!Number.isFinite(changes.salary) || changes.salary < 0)) {
        throw new Error("Salary must be a valid non-negative number");
    }
    return employees.map(emp =>
        emp.id === id ? { ...emp, ...changes } : emp
    );
}

// Immutably removes an employee by ID
export function deleteEmployee(
    employees: readonly Employee[],
    id: EmployeeId
): Employee[] {
    if (findById(employees, id) === undefined) {
        throw new Error("Employee not found");
    }
    return employees.filter(emp => emp.id !== id);
}

// Filters employees belonging to a specified department
export function filterByDepartment(
    employees: readonly Employee[],
    department: Department
): Employee[] {
    return employees.filter(emp => emp.department === department);
}

// Returns a new sorted array ordered by salary ascending or descending
export function sortBySalary(
    employees: readonly Employee[],
    order: "asc" | "desc" = "asc"
): Employee[] {
    return [...employees].sort((a, b) => {
        return order === "asc" ? a.salary - b.salary : b.salary - a.salary;
    });
}
