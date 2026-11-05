// Exercise 5: Immutable Updates using Array.prototype.map and Object Spread

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Increases salary of a specific employee and returns a new array
function increaseSalary(
    employees: readonly Employee[],
    targetId: number,
    raiseAmount: number
): Employee[] {
    return employees.map(emp => {
        if (emp.id === targetId) {
            // Return updated copy of the matched employee
            return { ...emp, salary: emp.salary + raiseAmount };
        }
        // Return existing employee reference unchanged
        return emp;
    });
}

const originalTeam: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true }
];

const updatedTeam = increaseSalary(originalTeam, 1, 7500);

console.log("Original Rahul Salary:", originalTeam[0].salary); // 50000
console.log("Updated Rahul Salary:", updatedTeam[0].salary);   // 57500
console.log("Immutable array reference check:", originalTeam !== updatedTeam); // true

export { increaseSalary };
