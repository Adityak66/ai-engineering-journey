"use strict";
// ==========================================
// 05-type-aliases.ts — Reusable Type Aliases
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
};
console.log("=== 05-type-aliases ===");
console.log(`Employee: ${employee.name} | Dept: ${employee.department} | Salary: ₹${employee.salary}`);
const detailedEmployee = {
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
