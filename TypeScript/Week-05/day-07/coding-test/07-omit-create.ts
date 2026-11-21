// 07-omit-create.ts
// Defining a creation DTO without a server-assigned ID using Omit.

interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Excludes id because IDs are generated upon creation
type CreateEmployee = Omit<Employee, "id">;

let nextId = 100;

function createEmployee(input: CreateEmployee): Employee {
    nextId += 1;
    return {
        id: nextId,
        ...input
    };
}

const payload: CreateEmployee = {
    name: "Kavita",
    salary: 64000,
    department: "Finance",
    isActive: true
};

const created = createEmployee(payload);
console.log("Created employee:", created.id, created.name, created.department);

export type { Employee, CreateEmployee };
export { createEmployee };
