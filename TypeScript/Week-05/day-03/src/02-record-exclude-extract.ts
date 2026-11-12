// 02-record-exclude-extract.ts
// Utility types for key-value mapping and union manipulation: Record, Exclude, and Extract.

interface Employee {
    id: number;
    name: string;
    salary: number;
}

// 1. Record<K, V>: constructs an object type whose property keys are K and values are V
type EmployeeRecord = Record<number, Employee>;

const employeeLookup: EmployeeRecord = {
    101: { id: 101, name: "Rahul", salary: 50000 },
    102: { id: 102, name: "Priya", salary: 60000 }
};

console.log("Record lookup for ID 101:", employeeLookup[101]?.name);

// Record using string literal union keys ensures every key is accounted for
type Department = "IT" | "HR" | "Finance";
type DepartmentBudget = Record<Department, number>;

const budgets: DepartmentBudget = {
    IT: 250000,
    HR: 120000,
    Finance: 180000
};
console.log("IT Department budget:", budgets.IT);

// 2. Exclude<T, U>: removes union members from T that are assignable to U
type Status = "active" | "inactive" | "pending";
type ResolvedStatus = Exclude<Status, "pending">; // "active" | "inactive"

const finalStatus: ResolvedStatus = "active";
console.log("Excluded status example:", finalStatus);

// 3. Extract<T, U>: retains only union members from T that are assignable to U
type ActionableStatus = Extract<Status, "active" | "pending">; // "active" | "pending"

const currentTaskStatus: ActionableStatus = "pending";
console.log("Extracted status example:", currentTaskStatus);

export type {
    Employee,
    EmployeeRecord,
    DepartmentBudget,
    Status,
    ResolvedStatus,
    ActionableStatus
};
