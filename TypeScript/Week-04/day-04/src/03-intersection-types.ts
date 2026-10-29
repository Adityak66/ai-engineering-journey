// ==========================================
// 03-intersection-types.ts — Intersection Types (&)
// ==========================================

export {};

// An intersection combines requirements from multiple types into a single unified shape
type Employee = {
    id: number;
    name: string;
};

type WithSalary = {
    salary: number;
};

type WithDepartment = {
    department: string;
};

// Combining multiple types using '&'
type PaidEmployee = Employee & WithSalary;
type FullEmployeeRecord = Employee & WithSalary & WithDepartment;

const employee: PaidEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log("=== 03-intersection-types ===");
console.log(`Paid Employee: ${employee.name} (ID: ${employee.id}) earns ₹${employee.salary}`);

const fullRecord: FullEmployeeRecord = {
    id: 102,
    name: "Aditya",
    salary: 80000,
    department: "AI Engineering"
};

console.log(`Full Record: ${fullRecord.name} in ${fullRecord.department}`);

/*
    🧠 Union (|) vs Intersection (&):
    - Union (|): An "OR" relationship. The value must satisfy at least one type in the union.
    - Intersection (&): An "AND" relationship. The object must satisfy ALL combined types simultaneously.
*/
