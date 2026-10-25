// ==========================================
// 05-type-aliases.ts — Reusable Type Aliases
// ==========================================

export {};

// 1. Defining a reusable Type Alias
type Employee = {
    id: number;
    name: string;
    salary: number;
    department: string;
};

const employee: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
};

console.log("=== 05-type-aliases ===");
console.log(`Employee: ${employee.name} | Dept: ${employee.department} | Salary: ₹${employee.salary}`);

// 2. Combining Types using Intersection (&)
type Address = {
    city: string;
    country: string;
};

type Contact = {
    email: string;
    phone: string;
};

type EmployeeWithProfile = Employee & {
    address: Address;
    contact?: Contact;
};

const detailedEmployee: EmployeeWithProfile = {
    id: 102,
    name: "Priya",
    salary: 65000,
    department: "Engineering",
    address: {
        city: "Pune",
        country: "India"
    },
    contact: {
        email: "priya@example.com",
        phone: "+91-9876543210"
    }
};

console.log("Detailed Employee Profile:", detailedEmployee.name, "in", detailedEmployee.address.city);
