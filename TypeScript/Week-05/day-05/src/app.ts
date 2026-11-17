// src/app.ts
// Application entry point connecting API, service, and model layers.

import type { Employee } from "./models/employee";
import { getEmployees, getEmployeeById } from "./api/employeeApi";
import { calculateSalary, filterEmployees } from "./services/employeeService";

async function main(): Promise<void> {
    try {
        console.log("Initializing employee management module...");

        // 1. Fetch all employees via typed API client
        const employees: Employee[] = await getEmployees();
        console.log(`Loaded ${employees.length} employee records.`);

        // 2. Fetch specific employee by ID
        const targetId = 101;
        const employee = await getEmployeeById(targetId);
        if (employee) {
            console.log(`Employee details for ID ${targetId}: ${employee.name} ($${employee.salary})`);
        } else {
            console.log(`Employee with ID ${targetId} not found.`);
        }

        // 3. Service calculation
        const baseSalary = 50000;
        const bonus = 5000;
        const totalSalary = calculateSalary(baseSalary, bonus);
        console.log(`Total calculated compensation: $${totalSalary.toLocaleString()}`);

        // 4. Filtering service
        const salaryThreshold = 60000;
        const highSalaryEmployees = filterEmployees(employees, salaryThreshold);
        console.log(`Employees earning >= $${salaryThreshold}: ${highSalaryEmployees.length}`);
        highSalaryEmployees.forEach(emp => {
            console.log(`- ${emp.name}: $${emp.salary.toLocaleString()}`);
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Application error:", error.message);
        } else {
            console.error("Unknown application error occurred");
        }
    }
}

main();
