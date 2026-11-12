// 01-basic-utility-types.ts
// Core TypeScript utility types for transforming object types: Partial, Required, Readonly, Pick, and Omit.

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    email?: string;
}

// 1. Partial<T>: makes all properties optional (ideal for patch/update payloads)
type UpdateEmployee = Partial<Employee>;

const salaryAdjustment: UpdateEmployee = {
    name: "Aditya",
    salary: 60000
};
console.log("Partial update payload:", salaryAdjustment);

// 2. Required<T>: makes all properties mandatory, including originally optional ones
type CompleteEmployee = Required<Employee>;

const completeProfile: CompleteEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT",
    email: "rahul@example.com" // Required here because of Required<Employee>
};
console.log("Required profile email:", completeProfile.email);

// 3. Readonly<T>: marks every top-level property as readonly at compile time
type ReadOnlyEmployee = Readonly<Employee>;

const lockedEmployee: ReadOnlyEmployee = {
    id: 102,
    name: "Sarah",
    salary: 65000,
    department: "Finance"
};
// Compile-time check prevents reassignment:
// lockedEmployee.salary = 70000; // Error: Cannot assign to 'salary' because it is a read-only property
console.log("Readonly employee:", lockedEmployee.name);

// 4. Pick<T, K>: creates a subset containing only the specified property keys
type EmployeeSummary = Pick<Employee, "id" | "name">;

const summaryCard: EmployeeSummary = {
    id: 101,
    name: "Rahul"
};
console.log("Picked summary:", summaryCard);

// 5. Omit<T, K>: creates a subset excluding the specified property keys (ideal for create DTOs)
type CreateEmployee = Omit<Employee, "id">;

const newEmployeeInput: CreateEmployee = {
    name: "Priya",
    salary: 60000,
    department: "HR",
    email: "priya@example.com"
};
console.log("Omitted create payload:", newEmployeeInput.name, newEmployeeInput.department);

export type {
    Employee,
    UpdateEmployee,
    CompleteEmployee,
    ReadOnlyEmployee,
    EmployeeSummary,
    CreateEmployee
};
