import type { Employee } from "../models/employee";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees(): Promise<Employee[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to load employees");
    }
    const users = (await response.json()) as any[];
    return users.map((u) => ({
        id: u.id,
        name: u.name,
        salary: 40000 + u.id * 5000
    }));
}

export async function getEmployeeById(id: number): Promise<Employee | undefined> {
    const employees = await getEmployees();
    return employees.find((employee) => employee.id === id);
}
