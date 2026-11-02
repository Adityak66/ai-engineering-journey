import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import type { Employee, Department, EmployeeUpdate } from "./types";
import { isValidDepartment } from "./types";
import {
    addEmployee,
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

// Initial seed dataset
let employees: Employee[] = [
    { id: 1, name: "Aditya", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Rahul", salary: 45000, department: "HR", isActive: true },
    { id: 3, name: "Sarah", salary: 60000, department: "IT", isActive: false }
];

const rl = createInterface({
    input: stdin,
    output: stdout
});

// Helper function to format employee details for terminal display
function formatEmployee(emp: Employee): string {
    const status = emp.isActive ? "Active" : "Inactive";
    const emailInfo = emp.email ? ` | Email: ${emp.email}` : "";
    return `ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.department} | Salary: $${emp.salary.toLocaleString()} | Status: ${status}${emailInfo}`;
}

// Helper to print a list of employees
function printEmployeeList(list: Employee[]): void {
    if (list.length === 0) {
        console.log("No employees to display.");
        return;
    }
    list.forEach(emp => console.log(formatEmployee(emp)));
}

async function main(): Promise<void> {
    try {
        while (true) {
            console.log("\n================================");
            console.log("EMPLOYEE MANAGEMENT SYSTEM");
            console.log("================================");
            console.log("1. Add Employee");
            console.log("2. View All Employees");
            console.log("3. Find Employee");
            console.log("4. Update Employee");
            console.log("5. Delete Employee");
            console.log("6. Filter by Department");
            console.log("7. Sort by Salary");
            console.log("8. Calculate Total Salary");
            console.log("9. Calculate Average Salary");
            console.log("10. Find Highest Paid Employee");
            console.log("11. View Active Employees");
            console.log("0. Exit");

            const choice = await rl.question("\nChoose an option: ");

            try {
                switch (choice.trim()) {
                    case "1": {
                        const idInput = (await rl.question("Enter Employee ID: ")).trim();
                        if (!idInput) {
                            throw new Error("Employee ID cannot be empty");
                        }

                        const nameInput = (await rl.question("Enter Name: ")).trim();
                        if (!nameInput) {
                            throw new Error("Employee name cannot be empty");
                        }

                        const deptInput = (await rl.question("Enter Department (IT, HR, Finance, Sales): ")).trim();
                        if (!isValidDepartment(deptInput)) {
                            throw new Error("Invalid department. Allowed departments: IT, HR, Finance, Sales");
                        }

                        const salaryInput = (await rl.question("Enter Salary: ")).trim();
                        const salaryNum = Number(salaryInput);
                        if (!Number.isFinite(salaryNum) || salaryNum < 0) {
                            throw new Error("Salary must be a valid non-negative number");
                        }

                        const activeInput = (await rl.question("Is employee active? (y/n, default y): ")).trim().toLowerCase();
                        const isActive = activeInput !== "n";

                        const emailInput = (await rl.question("Enter Email (optional, press Enter to skip): ")).trim();

                        const newEmployee: Employee = {
                            id: isNaN(Number(idInput)) ? idInput : Number(idInput),
                            name: nameInput,
                            salary: salaryNum,
                            department: deptInput as Department,
                            isActive,
                            ...(emailInput ? { email: emailInput } : {})
                        };

                        employees = addEmployee(employees, newEmployee);
                        console.log("Employee added successfully.");
                        break;
                    }

                    case "2": {
                        console.log("\n--- All Employees ---");
                        printEmployeeList(employees);
                        break;
                    }

                    case "3": {
                        const idToFind = (await rl.question("Enter Employee ID to search: ")).trim();
                        const employee = getEmployeeById(employees, idToFind);
                        if (employee) {
                            console.log(formatEmployee(employee));
                        } else {
                            console.log(`Employee with ID '${idToFind}' not found.`);
                        }
                        break;
                    }

                    case "4": {
                        const idToUpdate = (await rl.question("Enter Employee ID to update: ")).trim();
                        const existing = getEmployeeById(employees, idToUpdate);
                        if (!existing) {
                            console.log(`Employee with ID '${idToUpdate}' not found.`);
                            break;
                        }

                        const newName = (await rl.question(`New Name (current: ${existing.name}, press Enter to keep): `)).trim();
                        const newDept = (await rl.question(`New Department (current: ${existing.department}, press Enter to keep): `)).trim();
                        if (newDept && !isValidDepartment(newDept)) {
                            throw new Error("Invalid department. Allowed departments: IT, HR, Finance, Sales");
                        }

                        const newSalaryStr = (await rl.question(`New Salary (current: ${existing.salary}, press Enter to keep): `)).trim();
                        let newSalary: number | undefined;
                        if (newSalaryStr) {
                            const parsedSalary = Number(newSalaryStr);
                            if (!Number.isFinite(parsedSalary) || parsedSalary < 0) {
                                throw new Error("Salary must be a valid non-negative number");
                            }
                            newSalary = parsedSalary;
                        }

                        const newActiveStr = (await rl.question(`Active? (y/n, current: ${existing.isActive ? "y" : "n"}, press Enter to keep): `)).trim().toLowerCase();
                        const newEmail = (await rl.question(`New Email (current: ${existing.email ?? "none"}, press Enter to keep): `)).trim();

                        const changes: EmployeeUpdate = {};
                        if (newName) changes.name = newName;
                        if (newDept) changes.department = newDept as Department;
                        if (newSalary !== undefined) changes.salary = newSalary;
                        if (newActiveStr === "y") changes.isActive = true;
                        if (newActiveStr === "n") changes.isActive = false;
                        if (newEmail) changes.email = newEmail;

                        employees = updateEmployee(employees, idToUpdate, changes);
                        console.log("Employee updated successfully.");

                        const updated = getEmployeeById(employees, idToUpdate);
                        if (updated) {
                            console.log(formatEmployee(updated));
                        }
                        break;
                    }

                    case "5": {
                        const idToDelete = (await rl.question("Enter Employee ID to delete: ")).trim();
                        const existing = getEmployeeById(employees, idToDelete);
                        if (!existing) {
                            console.log(`Employee with ID '${idToDelete}' not found.`);
                            break;
                        }

                        employees = deleteEmployee(employees, idToDelete);
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
                        console.log(`Total Payroll Salary: $${total.toLocaleString()}`);
                        break;
                    }

                    case "9": {
                        const average = calculateAverageSalary(employees);
                        console.log(`Average Salary: $${average.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
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
                if (error instanceof Error) {
                    console.log("Error:", error.message);
                } else {
                    console.log("Unexpected error");
                }
            }
        }
    } finally {
        rl.close();
    }
}

main();
