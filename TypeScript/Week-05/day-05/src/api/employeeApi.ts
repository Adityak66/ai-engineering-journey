// src/api/employeeApi.ts
// Typed asynchronous API client for fetching employee data.

import type { Employee } from "../models/employee";

const API_URL = "/api/employees";

// Simulated in-memory database for local environments
const MOCK_EMPLOYEES: Employee[] = [
    { id: 101, name: "Rahul Sharma", salary: 50000, email: "rahul@example.com" },
    { id: 102, name: "Priya Patel", salary: 60000, email: "priya@example.com" },
    { id: 103, name: "Aditya Kale", salary: 75000, email: "aditya@example.com" }
];

export async function getEmployees(): Promise<Employee[]> {
    // In browser or Node 18+ environments, fetch is globally available:
    if (typeof fetch === "function") {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Failed to load employees: HTTP ${response.status}`);
            }
            // Note: 'as Employee[]' is a compile-time type assertion.
            // It instructs TypeScript to assume the JSON shape matches Employee[],
            // but does not execute runtime validation.
            return (await response.json()) as Employee[];
        } catch {
            // Fallback to local mock data when running offline or without an active API server
            return Promise.resolve(MOCK_EMPLOYEES);
        }
    }

    return Promise.resolve(MOCK_EMPLOYEES);
}

export async function getEmployeeById(id: number): Promise<Employee | undefined> {
    const employees = await getEmployees();
    // find() returns Employee | undefined if no matching record exists
    return employees.find(employee => employee.id === id);
}
