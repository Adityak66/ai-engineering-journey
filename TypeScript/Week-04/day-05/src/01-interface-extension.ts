export {};

interface Employee {
    id: number;
    name: string;
    salary: number;
}

const employee: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log(employee.name);

interface Manager extends Employee {
    teamSize: number;
}

const manager: Manager = {
    id: 101,
    name: "Rahul",
    salary: 80000,
    teamSize: 5
};

console.log(manager.name, manager.teamSize);

interface Staff {
    readonly id: number;
    name: string;
    email?: string;
    salary: number;
}

const staffMember: Staff = {
    id: 102,
    name: "Aditya",
    salary: 60000
};

console.log(staffMember.name);

interface Developer extends Employee {
    programmingLanguages: string[];
}

const dev: Developer = {
    id: 103,
    name: "Priya",
    salary: 75000,
    programmingLanguages: ["TypeScript", "C#", "SQL"]
};

console.log(dev.name, dev.programmingLanguages);
