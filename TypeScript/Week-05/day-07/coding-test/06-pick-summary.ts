// 06-pick-summary.ts
// Extracting a lightweight summary projection using Pick.

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
    email?: string;
}

type EmployeeSummary = Pick<Employee, "id" | "name" | "department">;

function toSummary(employee: Employee): EmployeeSummary {
    return {
        id: employee.id,
        name: employee.name,
        department: employee.department
    };
}

const staffMember: Employee = {
    id: 105,
    name: "Aditya",
    salary: 75000,
    department: "IT",
    isActive: true,
    email: "aditya@company.com"
};

const summary = toSummary(staffMember);
console.log("Summary:", summary.id, summary.name, summary.department);

export type { Employee, EmployeeSummary };
export { toSummary };
