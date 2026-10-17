// ============================================================================
// src/employeeService.js — Pure Business Logic & State Mutations
// ============================================================================

/**
 * Immutably adds a new employee to the list.
 */
export function addEmployee(employees, newEmp) {
    const employeeWithDefaults = {
        id: newEmp.id ?? Date.now(),
        name: newEmp.name?.trim() ?? "Unnamed",
        department: newEmp.department?.trim() ?? "General",
        salary: Number(newEmp.salary) || 0,
        city: newEmp.city?.trim() ?? "Remote",
        email: newEmp.email?.trim() ?? "no-email@company.com"
    };

    return [...employees, employeeWithDefaults];
}

/**
 * Immutably removes an employee by ID using filter.
 */
export function deleteEmployee(employees, id) {
    return employees.filter(emp => emp.id !== id);
}

/**
 * Immutably updates an employee with changed fields using map and spread.
 */
export function updateEmployee(employees, id, changes) {
    return employees.map(emp => {
        if (emp.id !== id) return emp;
        return {
            ...emp,
            ...changes,
            salary: changes.salary !== undefined ? Number(changes.salary) : emp.salary
        };
    });
}

/**
 * Calculates average salary using reduce().
 */
export function calculateAverageSalary(employees) {
    if (!employees || employees.length === 0) return 0;
    const total = employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0);
    return Math.round(total / employees.length);
}

/**
 * Calculates total payroll using reduce().
 */
export function calculateTotalPayroll(employees) {
    if (!employees || employees.length === 0) return 0;
    return employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0);
}

/**
 * Finds the highest salary in the list.
 */
export function getHighestSalary(employees) {
    if (!employees || employees.length === 0) return 0;
    return employees.reduce((max, emp) => Math.max(max, Number(emp.salary) || 0), 0);
}

/**
 * Filters and sorts employee data without mutating original array.
 */
export function filterAndSortEmployees(employees, { query = "", department = "All", sortOrder = "none" }) {
    let result = [...employees];

    // 1. Filter by Search Query (name, department, or city)
    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery) {
        result = result.filter(emp =>
            emp.name.toLowerCase().includes(cleanQuery) ||
            emp.department.toLowerCase().includes(cleanQuery) ||
            (emp.city && emp.city.toLowerCase().includes(cleanQuery))
        );
    }

    // 2. Filter by Department
    if (department && department !== "All") {
        result = result.filter(emp => emp.department === department);
    }

    // 3. Sort by Salary
    if (sortOrder === "salary-asc") {
        result.sort((a, b) => a.salary - b.salary);
    } else if (sortOrder === "salary-desc") {
        result.sort((a, b) => b.salary - a.salary);
    } else if (sortOrder === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}
