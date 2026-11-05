// Exercise 7: Demonstrating 'import type' vs standard runtime import

// Type-only import (erased at compile-time)
import type { Employee } from "./employee";

// Runtime value import
import { getEmployeeName } from "./employee";

const sampleEmployee: Employee = {
    id: 101,
    name: "Aditya",
    salary: 80000,
    department: "Engineering",
    isActive: true
};

const employeeName = getEmployeeName(sampleEmployee);
console.log("Retrieved Employee Name:", employeeName);
