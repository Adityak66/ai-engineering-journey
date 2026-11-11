// 02-keyof.ts
// The 'keyof' type operator extracts all known public property names of an object type as a union of literal types.

interface Employee {
    id: number;
    name: string;
    salary: number;
}

// Resulting type is equivalent to: "id" | "name" | "salary"
type EmployeeKeys = keyof Employee;

let validKey: EmployeeKeys;
validKey = "name";   // Valid
validKey = "salary"; // Valid
validKey = "id";     // Valid

// The following line would fail type checking:
// validKey = "department"; // Error: Type '"department"' is not assignable to type 'EmployeeKeys'

console.log("Assigned valid key:", validKey);

// Function using keyof to safely log a known property
function logEmployeeField(employee: Employee, key: EmployeeKeys): void {
    console.log(`Field [${key}]:`, employee[key]);
}

const sampleEmployee: Employee = {
    id: 201,
    name: "Aman Verma",
    salary: 62000
};

logEmployeeField(sampleEmployee, "id");
logEmployeeField(sampleEmployee, "name");
logEmployeeField(sampleEmployee, "salary");

// keyof on an object type with index signature
interface Dictionary {
    [key: string]: number;
}
type DictKeys = keyof Dictionary; // string | number

export type { Employee, EmployeeKeys };
export { logEmployeeField };
