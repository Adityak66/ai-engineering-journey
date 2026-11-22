// src/app.ts
// Interactive command-line interface for the Employee Management System.

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import type { Employee, EmployeeId, Department, CreateEmployee, UpdateEmployee } from "./types";
import { isValidDepartment } from "./types";
import {
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    filterByDepartment,
    sortBySalary
} from "./employeeService";
import {
    calculateTotalSalary,
    calculateAverageSalary,
    findHighestPaidEmployee,
    getActiveEmployees
} from "./salaryUtils";

// Initial in-memory sample employee dataset
let employees: Employee[] = [
    { id: 1, name: "Aditya", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Rahul", salary: 45000, department: "HR", isActive: true },
    { id: 3, name: "Sarah", salary: 60000, department: "IT", isActive: false }
];

const rl = createInterface({
    input: stdin,
    output: stdout
});

// Formats employee details for clean terminal presentation
function formatEmployee(emp: Employee): string {
    const status = emp.isActive ? "Active" : "Inactive";
    const emailInfo = emp.email ? ` | Email: ${emp.email}` : "";
    return `ID: ${String(emp.id)} | Name: ${emp.name} | Dept: ${emp.department} | Salary: $${emp.salary.toLocaleString()} | Status: ${status}${emailInfo}`;
}

// Helper to print a collection of employee records
function printEmployeeList(list: Employee[]): void {
    if (list.length === 0) {
        console.log("No employees to display.");
        return;
    }
    list.forEach(emp => console.log(formatEmployee(emp)));
}

// Parses numeric string IDs into numbers while preserving alphanumeric strings
function parseEmployeeId(input: string): EmployeeId {
    const trimmed = input.trim();
    if (!trimmed) {
        throw new Error("Employee ID cannot be empty");
    }
    const numericId = Number(trimmed);
    return Number.isFinite(numericId) ? numericId : trimmed;
}

// Validates that salary is a non-empty, finite, non-negative number
function validateSalary(input: string): number {
    const trimmed = input.trim();
    if (!trimmed) {
        throw new Error("Salary cannot be empty");
    }
    const salary = Number(trimmed);
    if (!Number.isFinite(salary) || salary < 0) {
        throw new Error("Enter a valid non-negative salary");
    }
    return salary;
}

// Parses optional y/n confirmation input while rejecting arbitrary invalid strings
function parseActiveStatus(input: string, defaultValue: boolean): boolean {
    const normalized = input.trim().toLowerCase();
    if (!normalized) {
        return defaultValue;
    }
    if (normalized === "y" || normalized === "yes") {
        return true;
    }
    if (normalized === "n" || normalized === "no") {
        return false;
    }
    throw new Error("Invalid status input. Enter 'y' or 'n'");
}

// Safe unknown error formatter for catch blocks
function displayError(error: unknown): void {
    if (error instanceof Error) {
        console.log("Error:", error.message);
    } else {
        console.log("Unexpected error");
    }
}

async function main(): Promise<void> {
    try {
        while (true) {
            console.log("\n=== EMPLOYEE MANAGEMENT ===");
            console.log("1. Add Employee");
            console.log("2. View All Employees");
            console.log("3. Find Employee");
            console.log("4. Update Employee");
            console.log("5. Delete Employee");
            console.log("6. Filter by Department");
            console.log("7. Sort by Salary");
            console.log("8. Total Salary");
            console.log("9. Average Salary");
            console.log("10. Highest Paid Employee");
            console.log("11. Active Employees");
            console.log("0. Exit");

            const choice = await rl.question("Choose option: ");

            try {
                switch (choice.trim()) {
                    case "1": {
                        const rawId = await rl.question("Enter Employee ID: ");
                        const id = parseEmployeeId(rawId);
                        if (getEmployeeById(employees, id) !== undefined) {
                            throw new Error("Employee ID already exists");
                        }

                        const name = (await rl.question("Enter Name: ")).trim();
                        if (!name) {
                            throw new Error("Employee name cannot be empty");
                        }

                        const deptInput = (await rl.question("Enter Department (IT, HR, Finance, Sales): ")).trim();
                        if (!isValidDepartment(deptInput)) {
                            throw new Error("Invalid department. Allowed departments: IT, HR, Finance, Sales");
                        }

                        const rawSalary = await rl.question("Enter Salary: ");
                        const salary = validateSalary(rawSalary);

                        const activeInput = await rl.question("Is employee active? (y/n, default y): ");
                        const isActive = parseActiveStatus(activeInput, true);

                        const emailInput = (await rl.question("Enter Email (optional, press Enter to skip): ")).trim();

                        const newEmployeeData: CreateEmployee = {
                            name,
                            salary,
                            department: deptInput as Department,
                            isActive,
                            ...(emailInput ? { email: emailInput } : {})
                        };

                        employees = createEmployee(employees, id, newEmployeeData);
                        console.log("Employee added successfully.");
                        break;
                    }

                    case "2": {
                        console.log("\n--- All Employees ---");
                        printEmployeeList(employees);
                        break;
                    }

                    case "3": {
                        const rawId = await rl.question("Enter Employee ID to find: ");
                        const id = parseEmployeeId(rawId);
                        const employee = getEmployeeById(employees, id);
                        if (employee) {
                            console.log(formatEmployee(employee));
                        } else {
                            console.log(`Employee with ID '${String(id)}' not found.`);
                        }
                        break;
                    }

                    case "4": {
                        const rawId = await rl.question("Enter Employee ID to update: ");
                        const id = parseEmployeeId(rawId);
                        const existing = getEmployeeById(employees, id);
                        if (!existing) {
                            throw new Error(`Employee with ID '${String(id)}' not found`);
                        }

                        const newName = (await rl.question(`New Name (current: ${existing.name}, press Enter to keep): `)).trim();
                        const newDept = (await rl.question(`New Department (current: ${existing.department}, press Enter to keep): `)).trim();
                        if (newDept && !isValidDepartment(newDept)) {
                            throw new Error("Invalid department. Allowed departments: IT, HR, Finance, Sales");
                        }

                        const newSalaryStr = (await rl.question(`New Salary (current: ${existing.salary}, press Enter to keep): `)).trim();
                        let newSalary: number | undefined;
                        if (newSalaryStr) {
                            newSalary = validateSalary(newSalaryStr);
                        }

                        const newActiveInput = await rl.question(`Active? (y/n, current: ${existing.isActive ? "y" : "n"}, press Enter to keep): `);
                        const newActiveValue = newActiveInput.trim()
                            ? parseActiveStatus(newActiveInput, existing.isActive)
                            : undefined;
                        const newEmail = (await rl.question(`New Email (current: ${existing.email ?? "none"}, press Enter to keep): `)).trim();

                        const changes: UpdateEmployee = {};
                        if (newName) changes.name = newName;
                        if (newDept) changes.department = newDept as Department;
                        if (newSalary !== undefined) changes.salary = newSalary;
                        if (newActiveValue !== undefined) changes.isActive = newActiveValue;
                        if (newEmail) changes.email = newEmail;

                        if (Object.keys(changes).length === 0) {
                            console.log("No changes provided.");
                            break;
                        }

                        employees = updateEmployee(employees, id, changes);
                        console.log("Employee updated successfully.");

                        const updated = getEmployeeById(employees, id);
                        if (updated) {
                            console.log(formatEmployee(updated));
                        }
                        break;
                    }

                    case "5": {
                        const rawId = await rl.question("Enter Employee ID to delete: ");
                        const id = parseEmployeeId(rawId);
                        employees = deleteEmployee(employees, id);
                        console.log("Employee deleted successfully.");
                        break;
                    }

                    case "6": {
                        const dept = (await rl.question("Enter department to filter (IT, HR, Finance, Sales): ")).trim();
                        if (!isValidDepartment(dept)) {
                            console.log("Invalid department. Must be IT, HR, Finance, or Sales.");
                            break;
                        }

                        const filtered = filterByDepartment(employees, dept);
                        console.log(`\n--- Employees in ${dept} ---`);
                        printEmployeeList(filtered);
                        break;
                    }

                    case "7": {
                        const orderInput = (await rl.question("Sort order (asc/desc, default asc): ")).trim().toLowerCase();
                        const order = orderInput === "desc" ? "desc" : "asc";
                        const sorted = sortBySalary(employees, order);
                        console.log(`\n--- Employees Sorted by Salary (${order}) ---`);
                        printEmployeeList(sorted);
                        break;
                    }

                    case "8": {
                        const total = calculateTotalSalary(employees);
                        console.log(`Total Salary: $${total.toLocaleString()}`);
                        break;
                    }

                    case "9": {
                        const avg = calculateAverageSalary(employees);
                        console.log(`Average Salary: $${avg.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
                        break;
                    }

                    case "10": {
                        const highest = findHighestPaidEmployee(employees);
                        if (highest) {
                            console.log("Highest Paid Employee:");
                            console.log(formatEmployee(highest));
                        } else {
                            console.log("No employees in the system.");
                        }
                        break;
                    }

                    case "11": {
                        const activeList = getActiveEmployees(employees);
                        console.log("\n--- Active Employees ---");
                        printEmployeeList(activeList);
                        break;
                    }

                    case "0": {
                        console.log("Exiting Employee Management System. Goodbye.");
                        return;
                    }

                    default: {
                        console.log("Invalid option. Please choose a number between 0 and 11.");
                        break;
                    }
                }
            } catch (error: unknown) {
                displayError(error);
            }
        }
    } finally {
        rl.close();
    }
}

main();
