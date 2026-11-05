// Exercise 1: Typed Employee Interface and Array of Objects

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

const employees: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true },
    { id: 3, name: "Aditya", salary: 75000, department: "Engineering", isActive: true }
];

// Iterate and print typed employee records
employees.forEach(emp => {
    console.log(`[${emp.id}] ${emp.name} - ${emp.department} ($${emp.salary})`);
});

export {};
