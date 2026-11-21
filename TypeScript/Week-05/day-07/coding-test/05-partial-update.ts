// 05-partial-update.ts
// Immutable employee update using Partial<Omit<Employee, "id">>.

interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Excludes id so callers cannot modify the primary key during an update
type UpdateEmployee = Partial<Omit<Employee, "id">>;

function updateEmployee(
    employees: readonly Employee[],
    id: number,
    changes: UpdateEmployee
): Employee[] {
    const exists = employees.some(emp => emp.id === id);
    if (!exists) {
        throw new Error(`Employee with ID ${id} not found`);
    }

    return employees.map(emp =>
        emp.id === id ? { ...emp, ...changes } : emp
    );
}

const team: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true }
];

const updatedTeam = updateEmployee(team, 1, { salary: 58000, department: "Engineering" });

console.log("Original salary (unchanged):", team[0].salary);
console.log("Updated salary:", updatedTeam[0].salary);
console.log("Reference changed:", team !== updatedTeam);

export type { Employee, UpdateEmployee };
export { updateEmployee };
