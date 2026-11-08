// 06-generic-type-aliases.ts
// Generic type aliases for reusable types, wrappers, and collection structures.

// 1. Generic wrapper container
type Box<T> = {
    value: T;
};

const nameBox: Box<string> = { value: "Aditya" };
const salaryBox: Box<number> = { value: 50000 };
const booleanBox: Box<boolean> = { value: true };

console.log("String box value:", nameBox.value);
console.log("Number box value:", salaryBox.value);
console.log("Boolean box value:", booleanBox.value);

// 2. Generic array alias
type DataList<T> = T[];

const employeeNames: DataList<string> = ["Rahul", "Priya", "Aditya"];
const salaries: DataList<number> = [30000, 40000, 55000];

console.log("Names count:", employeeNames.length);
console.log("Salaries count:", salaries.length);

// 3. Generic collection contract
interface DataCollection<T> {
    items: T[];
    total: number;
}

interface TeamMember {
    id: number;
    name: string;
}

const devTeam: DataCollection<TeamMember> = {
    items: [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Priya" }
    ],
    total: 2
};

console.log("Collection total:", devTeam.total);
console.log("First member:", devTeam.items[0].name);

export type { Box, DataList, DataCollection };
