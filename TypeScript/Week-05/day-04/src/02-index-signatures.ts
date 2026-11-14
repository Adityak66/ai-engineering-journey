// 02-index-signatures.ts
// Dynamic key lookup and typing using Index Signatures.

interface Employee {
    id: number;
    name: string;
    salary: number;
}

// Index signature describes objects with arbitrary string keys mapping to Employee values
interface EmployeeDictionary {
    [id: string]: Employee;
}

const employeeStore: EmployeeDictionary = {
    "101": { id: 101, name: "Rahul", salary: 50000 },
    "102": { id: 102, name: "Priya", salary: 60000 }
};

console.log("Lookup 101:", employeeStore["101"]?.name);
console.log("Lookup 102:", employeeStore["102"]?.salary);

// Mixing defined properties with index signatures
interface DepartmentRoster {
    departmentName: string;
    leadId: number;
    // All additional dynamic properties must also align with string | number:
    [key: string]: string | number;
}

const itRoster: DepartmentRoster = {
    departmentName: "Information Technology",
    leadId: 101,
    budget: 500000,
    headcount: 24
};

console.log(`Department: ${itRoster.departmentName}, Headcount: ${itRoster.headcount}`);

export type { Employee, EmployeeDictionary, DepartmentRoster };
