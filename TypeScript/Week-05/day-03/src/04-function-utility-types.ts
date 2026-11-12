// 04-function-utility-types.ts
// Deriving types directly from function signatures using ReturnType<T> and Parameters<T>.

// 1. ReturnType<typeof fn>: automatically extracts the return type of a function
function getEmployee() {
    return {
        id: 101,
        name: "Rahul",
        salary: 50000
    };
}

// Derived type: { id: number; name: string; salary: number; }
type EmployeeResult = ReturnType<typeof getEmployee>;

const copiedResult: EmployeeResult = {
    id: 102,
    name: "Priya",
    salary: 60000
};
console.log("Copied employee result:", copiedResult.name);

// 2. Parameters<typeof fn>: extracts parameter types as a typed tuple
function createEmployee(
    name: string,
    salary: number,
    department: string
) {
    return { name, salary, department };
}

// Derived type: [name: string, salary: number, department: string]
type CreateEmployeeParams = Parameters<typeof createEmployee>;

const employeeInput: CreateEmployeeParams = ["Rahul", 50000, "IT"];
const createdEmployee = createEmployee(...employeeInput);
console.log("Created from tuple parameters:", createdEmployee);

// Practice: deriving parameter and return types for calculateSalary and getEmployees
function calculateSalary(base: number, bonus: number = 0): number {
    return base + bonus;
}

type CalculateSalaryParams = Parameters<typeof calculateSalary>; // [base: number, bonus?: number]
type CalculateSalaryReturn = ReturnType<typeof calculateSalary>; // number

const salaryArgs: CalculateSalaryParams = [55000, 5000];
const totalCompensation: CalculateSalaryReturn = calculateSalary(...salaryArgs);
console.log("Total compensation:", totalCompensation);

function getEmployees() {
    return [
        { id: 1, name: "Aditya", role: "Developer" },
        { id: 2, name: "Sarah", role: "Designer" }
    ];
}

type EmployeesArray = ReturnType<typeof getEmployees>;
const team: EmployeesArray = getEmployees();
console.log("Team count:", team.length);

export type {
    EmployeeResult,
    CreateEmployeeParams,
    CalculateSalaryParams,
    CalculateSalaryReturn,
    EmployeesArray
};
