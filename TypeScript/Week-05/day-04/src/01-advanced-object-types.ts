// 01-advanced-object-types.ts
// Advanced object typing: intersection types, readonly, optional modifiers, and excess property checks.

interface EmployeeIdentity {
    readonly id: number;
    name: string;
}

interface Compensation {
    salary: number;
    currency?: string;
}

// Intersection type: combining multiple interfaces into a single contract
type FullEmployee = EmployeeIdentity & Compensation;

const employeeRecord: FullEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    currency: "INR"
};

// employeeRecord.id = 102; // Error: Cannot assign to 'id' because it is a read-only property
console.log("Employee Record:", employeeRecord.name, `[${employeeRecord.id}]`);

// Excess Property Check Demonstration:
interface EmployeeCard {
    id: number;
    name: string;
}

// 1. Direct object literal triggers excess property check:
// const invalidCard: EmployeeCard = { id: 101, name: "Rahul", salary: 50000 }; // Error: Object literal may only specify known properties

// 2. Structural typing with existing reference allows extra compatible properties:
const fullData = { id: 101, name: "Rahul", salary: 50000 };
const validCard: EmployeeCard = fullData; // Accepted via structural assignability

console.log("Card representation:", validCard.name);

export type { EmployeeIdentity, Compensation, FullEmployee, EmployeeCard };
