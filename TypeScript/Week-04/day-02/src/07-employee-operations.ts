// ==========================================
// 07-employee-operations.ts — Practical CRUD Operations with Types
// ==========================================

export {};

// Step 1 — Create Data Types
interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

interface Department {
    id: number;
    name: string;
}

interface Address {
    city: string;
    country: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
};

interface Customer {
    id: number;
    name: string;
    address: Address;
}

interface Order {
    id: number;
    customerId: number;
    products: Product[];
}

// Step 2 — Initial Employee Data
let employees: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
    { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true },
    { id: 3, name: "Sarah", salary: 55000, department: "IT", isActive: false }
];

console.log("=== 07-employee-operations ===");

// Step 3 — Practical Operations

// 1. Add an employee immutably
const newEmployee: Employee = {
    id: 4,
    name: "Amit",
    salary: 45000,
    department: "Finance",
    isActive: true
};
employees = [...employees, newEmployee];
console.log("1. Added Amit. Total count:", employees.length);

// 2. Find by ID
const employee = employees.find(emp => emp.id === 2);
console.log("2. Found employee by ID 2:", employee?.name, `(${employee?.department})`);

// 3. Filter by department
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("3. IT department staff:", itEmployees.map(e => e.name));

// 4. Calculate total salary using reduce
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(`4. Total Monthly Payroll: ₹${totalSalary}`);

// 5. Update without mutating the original object
// Notice: 'id' is readonly on the original object, but we create a new object reference with the updated salary!
const updatedEmployees = employees.map(emp =>
    emp.id === 1 ? { ...emp, salary: 65000 } : emp
);

console.log("5. Updated Rahul salary:", updatedEmployees.find(e => e.id === 1)?.salary);
console.log("Original array remains unmutated:", employees.find(e => e.id === 1)?.salary);
