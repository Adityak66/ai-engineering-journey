// 01-interface-extension.ts
// Interface definitions, inheritance using 'extends', and property modifiers.

interface Employee {
    readonly id: number; // Readonly prevents reassignment after initialization
    name: string;
    salary: number;
    email?: string;      // Optional property
}

// 1. Basic interface instance
const baseStaff: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log("Employee:", baseStaff.name, `[ID: ${baseStaff.id}]`);

// 2. Extending an interface: Manager inherits id, name, salary, and email
interface Manager extends Employee {
    teamSize: number;
    department: string;
}

const teamLead: Manager = {
    id: 102,
    name: "Sarah",
    salary: 85000,
    email: "sarah@company.com",
    teamSize: 6,
    department: "Engineering"
};

console.log("Manager:", teamLead.name, `Leading ${teamLead.teamSize} engineers`);

// 3. Extending with custom skill set
interface Developer extends Employee {
    skills: string[];
    isSenior: boolean;
}

const seniorDev: Developer = {
    id: 103,
    name: "Aditya",
    salary: 78000,
    skills: ["TypeScript", "C#", ".NET", "PostgreSQL"],
    isSenior: true
};

console.log("Developer skills:", seniorDev.skills.join(", "));

// Key Differences: 'type' vs 'interface'
// - interface: Ideal for object shapes, models, public API contracts; supports declaration merging and 'extends'.
// - type: Can model primitives, unions, intersections, tuples, and mapped types; cannot merge declarations.

export {};
