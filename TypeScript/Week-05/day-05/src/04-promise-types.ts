// 04-promise-types.ts
// Understanding Promise<T> and typing asynchronous functions in TypeScript.

import type { Employee } from "./models/employee";

// An asynchronous function always wraps its return value inside a Promise<T>
async function getBaseSalary(): Promise<number> {
    return 50000;
}

async function getRoleDescription(): Promise<string> {
    return "Full Stack Engineer";
}

async function getInitialTeam(): Promise<Employee[]> {
    return [
        { id: 101, name: "Rahul", salary: 50000 },
        { id: 102, name: "Priya", salary: 60000 }
    ];
}

async function executeAsyncFlow(): Promise<void> {
    // Awaiting unwraps Promise<number> to number
    const salary: number = await getBaseSalary();

    // Awaiting unwraps Promise<string> to string
    const role: string = await getRoleDescription();

    // Awaiting unwraps Promise<Employee[]> to Employee[]
    const team: Employee[] = await getInitialTeam();

    console.log(`Role: ${role}, Starting Salary: $${salary}`);
    console.log(`Team members count: ${team.length}`);
}

executeAsyncFlow();

export {};
