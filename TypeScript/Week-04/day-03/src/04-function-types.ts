// ==========================================
// 04-function-types.ts — Function Type Signatures
// ==========================================

export {};

// 1. Defining a function type alias contract
type SalaryCalculator = (salary: number, bonus: number) => number;

// 2. Assigning implementation adhering to the SalaryCalculator signature
const calculateTotal: SalaryCalculator = (salary, bonus) => {
    return salary + bonus;
};

console.log("=== 04-function-types ===");
console.log("calculateTotal(50000, 5000):", calculateTotal(50000, 5000));

// 3. Alternate implementation sharing the exact same function signature
const calculateDeduction: SalaryCalculator = (salary, tax) => {
    return salary - tax;
};

console.log("calculateDeduction(50000, 7500):", calculateDeduction(50000, 7500));

// 4. Function type describing an employee predicate
type EmployeeFilter = (department: string, minSalary: number) => boolean;

const isHighPaidEngineer: EmployeeFilter = (dept, minSalary) => {
    return dept === "Engineering" && minSalary >= 70000;
};

console.log("Is Engineering with 75k high paid?", isHighPaidEngineer("Engineering", 75000));
console.log("Is HR with 50k high paid?", isHighPaidEngineer("HR", 50000));
