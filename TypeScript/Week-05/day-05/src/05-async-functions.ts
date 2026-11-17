// 05-async-functions.ts
// Typing sequential and concurrent asynchronous workflows using Promise.all.

import type { Employee } from "./models/employee";

// Mock helper to simulate network delay
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDepartmentBudget(dept: string): Promise<number> {
    await delay(10);
    return dept === "Engineering" ? 450000 : 200000;
}

async function fetchDepartmentHead(dept: string): Promise<string> {
    await delay(10);
    return dept === "Engineering" ? "Sarah Connor" : "Michael Scott";
}

async function fetchDepartmentStaff(dept: string): Promise<Employee[]> {
    await delay(10);
    return [
        { id: 201, name: "Aman", salary: 65000 },
        { id: 202, name: "Sneha", salary: 72000 }
    ];
}

async function loadDepartmentOverview(dept: string): Promise<void> {
    console.log(`Loading overview for ${dept}...`);

    // Concurrent execution: fetching budget, head, and staff in parallel
    const [budget, head, staff] = await Promise.all([
        fetchDepartmentBudget(dept),
        fetchDepartmentHead(dept),
        fetchDepartmentStaff(dept)
    ]);

    console.log(`Department: ${dept}`);
    console.log(`Lead: ${head} | Budget: $${budget.toLocaleString()}`);
    console.log(`Active headcount: ${staff.length}`);
}

loadDepartmentOverview("Engineering");

export {};
