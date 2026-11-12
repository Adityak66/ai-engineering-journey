// 05-awaited.ts
// Awaited<T> models 'await' behavior to unwrap the resolved value type of Promises.

interface Employee {
    id: number;
    name: string;
    department: string;
}

// Asynchronous service function returning Promise<Employee>
async function getEmployee(): Promise<Employee> {
    return {
        id: 101,
        name: "Rahul",
        department: "IT"
    };
}

// Combining ReturnType and Awaited unwraps Promise<Employee> to Employee
type EmployeeResult = Awaited<ReturnType<typeof getEmployee>>;

// Works identically for arrays wrapped in Promises
async function getEmployees(): Promise<Employee[]> {
    return [
        { id: 101, name: "Rahul", department: "IT" },
        { id: 102, name: "Priya", department: "HR" }
    ];
}

type EmployeeListResult = Awaited<ReturnType<typeof getEmployees>>; // Employee[]

// Awaited recursively unwraps nested Promises
type NestedPromise = Promise<Promise<string>>;
type UnwrappedString = Awaited<NestedPromise>; // string

async function runAsyncDemo(): Promise<void> {
    const single: EmployeeResult = await getEmployee();
    const list: EmployeeListResult = await getEmployees();
    const label: UnwrappedString = "Async data resolved";

    console.log("Single awaited employee:", single.name);
    console.log("List awaited count:", list.length);
    console.log("Nested promise demo:", label);
}

runAsyncDemo();

export type { Employee, EmployeeResult, EmployeeListResult, UnwrappedString };
