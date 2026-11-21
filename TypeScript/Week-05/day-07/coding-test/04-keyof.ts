// 04-keyof.ts
// Type-safe property lookup using 'keyof' constraint and indexed access return type.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

const employee: Employee = {
    id: 101,
    name: "Sarah",
    department: "Finance",
    salary: 62000
};

// Return types are accurately inferred as string and number
const empName: string = getProperty(employee, "name");
const empSalary: number = getProperty(employee, "salary");

console.log("Name:", empName);
console.log("Salary:", empSalary);

export { getProperty };
