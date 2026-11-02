import type { Employee, EmployeeId, EmployeeUpdate, Department } from "./types";

// Adds a new employee to the list without mutating the original array
export function addEmployee(
    employees: Employee[],
    employee: Employee
): Employee[] {
    const exists = employees.some(
        emp => String(emp.id) === String(employee.id)
    );

    if (exists) {
        throw new Error("Employee ID already exists");
    }

    return [...employees, employee];
}

// Finds an employee by ID using string comparison to support number and string IDs
export function getEmployeeById(
    employees: Employee[],
    id: EmployeeId
): Employee | undefined {
    return employees.find(
        emp => String(emp.id) === String(id)
    );
}

// Immutably updates an employee by returning a new array with updated fields
export function updateEmployee(
    employees: Employee[],
    id: EmployeeId,
    changes: EmployeeUpdate
): Employee[] {
    return employees.map(emp =>
        String(emp.id) === String(id) ? { ...emp, ...changes } : emp
    );
}

// Immutably removes an employee by ID
export function deleteEmployee(
    employees: Employee[],
    id: EmployeeId
): Employee[] {
    return employees.filter(
        emp => String(emp.id) !== String(id)
    );
}

// Filters employees belonging to a specific department
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
    return [...employees].sort((a, b) =>
        order === "asc" ? a.salary - b.salary : b.salary - a.salary
    );
}
