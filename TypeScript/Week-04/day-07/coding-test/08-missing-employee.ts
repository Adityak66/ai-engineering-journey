// Exercise 8: Handling Missing Values with find() and Union Return Types

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

const employees: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true },
    { id: 3, name: "Aditya", salary: 75000, department: "Engineering", isActive: true }
];

// Returns matched Employee or undefined if not found
function findEmployeeById(
    employeeList: readonly Employee[],
    searchId: number
): Employee | undefined {
    return employeeList.find(emp => emp.id === searchId);
}

// Case 1: Search for an existing employee
const existingEmployee = findEmployeeById(employees, 2);
if (existingEmployee !== undefined) {
    console.log(`Found: ${existingEmployee.name} (${existingEmployee.department})`);
} else {
    console.log("Employee not found.");
}

// Case 2: Search for a non-existent employee
const missingEmployee = findEmployeeById(employees, 99);
if (missingEmployee !== undefined) {
    console.log(`Found: ${missingEmployee.name}`);
} else {
    console.log("Employee with ID 99 was safely handled as undefined.");
}

export { findEmployeeById };
