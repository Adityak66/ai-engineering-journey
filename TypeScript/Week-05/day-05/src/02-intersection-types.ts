// 02-intersection-types.ts
// Combining object contracts via Intersection Types (&).

interface EmployeeBase {
    id: number;
    name: string;
}

interface SalaryInfo {
    salary: number;
    currency: string;
}

interface AccessControl {
    roles: string[];
    hasAdminAccess: boolean;
}

// Combining two interfaces into a single required type
type PaidEmployee = EmployeeBase & SalaryInfo;

const employeeRecord: PaidEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    currency: "INR"
};

console.log("Paid Employee:", employeeRecord.name, `${employeeRecord.currency} ${employeeRecord.salary}`);

// Multiple intersections: combines identity, compensation, and access controls
type SystemUser = EmployeeBase & SalaryInfo & AccessControl;

const administrator: SystemUser = {
    id: 104,
    name: "Vikram",
    salary: 92000,
    currency: "INR",
    roles: ["Engineer", "DevOps", "Admin"],
    hasAdminAccess: true
};

console.log(`Admin ${administrator.name} has ${administrator.roles.length} roles assigned.`);

// Comparison:
// 'interface extends' models hierarchical subtyping (is-a relationship).
// 'type intersection (&)' models composable traits and multi-contract blending.

export {};
