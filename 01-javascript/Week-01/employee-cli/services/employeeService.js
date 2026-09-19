import { employees } from '../data/employees.js';

let nextId = 1;

export function addEmployee(name, department, salary) {
    const employee = {
        id: nextId++,
        name,
        department,
        salary
    };
    employees.push(employee);
    return employee;
}

export function removeEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        return true;
    }
    return false;
}

export function findEmployee(name) {
    return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}

export function findEmployeeById(id) {
    return employees.find(emp => emp.id === id);
}

export function filterEmployees(department) {
    return employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
}

export function getHighestSalaryEmployee() {
    if (employees.length === 0) return null;
    
    // Feature 6 - Highest Salary using reduce()
    return employees.reduce((highest, current) => {
        return (current.salary > highest.salary) ? current : highest;
    }, employees[0]);
}

export function calculateAverageSalary() {
    if (employees.length === 0) return 0;
    
    // Feature 7 - Average Salary using reduce()
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return totalSalary / employees.length;
}

export function sortEmployeesBySalaryDesc() {
    // Feature 8 - Sort by Salary (Highest to Lowest)
    // Using spread to avoid mutating the original array
    return [...employees].sort((a, b) => b.salary - a.salary);
}

export function updateEmployee(id, updates) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        // Feature 9 - Update using spread operator
        employees[index] = {
            ...employees[index],
            ...updates
        };
        return employees[index];
    }
    return null;
}

export function displayEmployees(employeeList = employees) {
    // Feature 10 - Display all using for...of
    if (employeeList.length === 0) {
        console.log("No employees to display.");
        return;
    }
    
    for (const emp of employeeList) {
        console.log(`[ID: ${emp.id}] ${emp.name.padEnd(10)} | Dept: ${emp.department.padEnd(10)} | Salary: ₹${emp.salary.toLocaleString()}`);
    }
}

