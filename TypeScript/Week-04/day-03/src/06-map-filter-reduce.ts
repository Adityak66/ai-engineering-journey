// ==========================================
// 06-map-filter-reduce.ts — Higher-Order Array Methods with Types
// ==========================================

export {};

console.log("=== 06-map-filter-reduce ===");

// 1. Primitive Array Transformations
const salaries: number[] = [30000, 40000, 50000, 65000];

// map(): transforms T -> U
const doubled: number[] = salaries.map((salary: number): number => salary * 2);

// filter(): predicate returning boolean
const highSalaries: number[] = salaries.filter((salary: number): boolean => salary >= 40000);

// reduce(): accumulator aggregation
const totalSalary: number = salaries.reduce((total: number, salary: number): number => total + salary, 0);

console.log("Doubled:", doubled);
console.log("High Salaries (>= 40k):", highSalaries);
console.log("Total Salary:", totalSalary);

// 2. Practice with Typed Employee Objects
interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

const employees: Employee[] = [
    { id: 1, name: "Rahul", salary: 45000, department: "IT" },
    { id: 2, name: "Priya", salary: 60000, department: "HR" },
    { id: 3, name: "Aditya", salary: 75000, department: "Engineering" },
    { id: 4, name: "Sarah", salary: 52000, department: "IT" }
];

// a) map() to extract employee names
const employeeNames: string[] = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

// b) filter() to find employees with salary above ₹50,000
const wellCompensated: Employee[] = employees.filter(emp => emp.salary > 50000);
console.log("Salaries > 50k:", wellCompensated.map(e => `${e.name} (₹${e.salary})`));

// c) reduce() to calculate total payroll
const totalEmployeePayroll: number = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(`Total Employee Payroll: ₹${totalEmployeePayroll}`);
