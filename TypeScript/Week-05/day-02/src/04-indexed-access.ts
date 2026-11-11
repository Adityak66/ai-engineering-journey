// 04-indexed-access.ts
// Indexed access types (lookup types) allow extracting the type of a specific property from another type.

interface Employee {
    id: number;
    name: string;
    salary: number;
    isActive: boolean;
    contact: {
        email: string;
        phone: string;
    };
}

// 1. Single property extraction
type EmployeeId = Employee["id"];         // number
type EmployeeName = Employee["name"];     // string
type EmployeeSalary = Employee["salary"]; // number

const empId: EmployeeId = 301;
const empName: EmployeeName = "Kavita";
const empSalary: EmployeeSalary = 68000;

console.log(`Indexed access: [${empId}] ${empName} earning $${empSalary}`);

// 2. Union indexed access: extracts a union of the specified property types
type EmployeeNameOrSalary = Employee["name" | "salary"]; // string | number

let fieldVal: EmployeeNameOrSalary = "HR Specialist";
fieldVal = 72000;
console.log("Union indexed access value:", fieldVal);

// 3. Nested property extraction
type EmployeeContact = Employee["contact"];
type EmployeeEmail = Employee["contact"]["email"]; // string

const email: EmployeeEmail = "kavita@company.com";
console.log("Extracted nested email type:", email);

// 4. Extracting all property value types using keyof
type AllEmployeePropertyTypes = Employee[keyof Employee]; // number | string | boolean | { email: string; phone: string; }

// 5. Extracting element types from arrays using [number]
type EmployeeList = Employee[];
type SingleEmployeeFromList = EmployeeList[number]; // Employee

const sampleArrayItem: SingleEmployeeFromList = {
    id: 302,
    name: "Vikram",
    salary: 58000,
    isActive: true,
    contact: { email: "vikram@company.com", phone: "9876543210" }
};

console.log("Extracted array item type name:", sampleArrayItem.name);

export type {
    Employee,
    EmployeeId,
    EmployeeName,
    EmployeeSalary,
    EmployeeNameOrSalary,
    EmployeeContact,
    AllEmployeePropertyTypes,
    SingleEmployeeFromList
};
