// 03-typeof-type-operator.ts
// The 'typeof' operator used in a type position extracts the static type of a JavaScript value or variable.

// JavaScript runtime typeof returns a string at execution time:
const runtimeStringCheck = typeof "Aditya"; // "string"
const runtimeNumberCheck = typeof 22;       // "number"
console.log("Runtime checks:", runtimeStringCheck, runtimeNumberCheck);

// TypeScript type-position typeof extracts compile-time type definitions:
const defaultEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
};

// Extracted type represents: { id: number; name: string; salary: number; department: string; }
type Employee = typeof defaultEmployee;

const newHire: Employee = {
    id: 102,
    name: "Priya",
    salary: 60000,
    department: "HR"
};

console.log("New hire extracted type instance:", newHire.name, `(${newHire.department})`);

// Using typeof with configuration objects
const appConfig = {
    apiEndpoint: "https://api.internal/v1",
    timeoutMs: 5000,
    retries: 3,
    debugMode: false
};

type AppConfig = typeof appConfig;

function initializeService(config: AppConfig): void {
    console.log(`Connecting to ${config.apiEndpoint} (timeout: ${config.timeoutMs}ms)`);
}

initializeService(appConfig);

// Using typeof with functions: extracting function signature
function calculateBonus(baseSalary: number, rating: number): number {
    return baseSalary * (rating * 0.1);
}

type BonusCalculatorFn = typeof calculateBonus;

const standardBonusCalculator: BonusCalculatorFn = (base, rating) => base * (rating * 0.08);
console.log("Calculated bonus:", standardBonusCalculator(50000, 4));

export type { Employee, AppConfig, BonusCalculatorFn };
export { defaultEmployee, initializeService };
