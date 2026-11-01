import type { Employee } from "./models/employee";
import { getEmployees, getEmployeeById } from "./api/employeeApi";
import { calculateSalary, filterEmployees } from "./services/employeeService";

async function main(): Promise<void> {
    try {
        const employees: Employee[] = await getEmployees();
        const employee = await getEmployeeById(1);
        const totalSalary = calculateSalary(50000, 5000);
        const highSalaryEmployees = filterEmployees(employees, 50000);

        console.log("Employee:", employee);
        console.log("Total Salary:", totalSalary);
        console.log("High salary count:", highSalaryEmployees.length);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Unknown error");
        }
    }
}

main();
