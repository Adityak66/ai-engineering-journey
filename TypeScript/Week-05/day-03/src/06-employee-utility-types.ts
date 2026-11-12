// 06-employee-utility-types.ts
// Practical combination of utility types derived from a single Employee domain interface.

interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department: string;
    email?: string;
}

// 1. CreateEmployee: excludes server-generated 'id'
type CreateEmployee = Omit<Employee, "id">;

// 2. UpdateEmployee: allows partial updates while keeping 'id' non-editable
type UpdateEmployee = Partial<Omit<Employee, "id">>;

// 3. EmployeeSummary: compact representation for lists or cards
type EmployeeSummary = Pick<Employee, "id" | "name">;

// 4. EmployeeRecord: lookup map indexed by numeric employee ID
type EmployeeRecord = Record<number, Employee>;

// Factory function accepting CreateEmployee DTO
function createEmployee(data: CreateEmployee): Employee {
    return {
        id: Date.now(),
        ...data
    };
}

// 5. EmployeeParameters: extracts the input tuple type of createEmployee
type EmployeeParameters = Parameters<typeof createEmployee>; // [data: CreateEmployee]

// 6. EmployeeResult: extracts the return type of createEmployee
type EmployeeResult = ReturnType<typeof createEmployee>; // Employee

// Demonstrating the derived types in action
const newHireData: CreateEmployee = {
    name: "Aditya",
    salary: 70000,
    department: "Engineering",
    email: "aditya@company.com"
};

const created: EmployeeResult = createEmployee(newHireData);

const lookup: EmployeeRecord = {
    [created.id]: created
};

const summary: EmployeeSummary = {
    id: created.id,
    name: created.name
};

const patchUpdate: UpdateEmployee = {
    salary: 75000
};

console.log("Created summary:", summary);
console.log("Lookup record email:", lookup[created.id]?.email);
console.log("Patch payload:", patchUpdate);

// Asynchronous retrieval with Awaited
async function getEmployeeById(id: number): Promise<Employee | undefined> {
    return lookup[id];
}

// Resolved type is 'Employee | undefined', stripped of the Promise wrapper
type EmployeeByIdResult = Awaited<ReturnType<typeof getEmployeeById>>;

async function checkLookup(): Promise<void> {
    const found: EmployeeByIdResult = await getEmployeeById(created.id);
    console.log("Async lookup found:", found?.name ?? "Not found");
}

checkLookup();

export type {
    Employee,
    CreateEmployee,
    UpdateEmployee,
    EmployeeSummary,
    EmployeeRecord,
    EmployeeParameters,
    EmployeeResult,
    EmployeeByIdResult
};
