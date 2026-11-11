// 08-generic-utilities.ts
// Comprehensive practical implementation of core generic utilities and type operators.

// Exercise 1: getLength() accepting any type constrained to { length: number }
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

console.log("String length check:", getLength("TypeScript Generics"));
console.log("Array length check:", getLength([1, 2, 3, 4, 5]));
console.log("Custom container length:", getLength({ length: 12, topic: "Modules" }));

// Exercise 2: mergeObjects() combining two distinct objects into T & U
function mergeObjects<T extends object, U extends object>(first: T, second: U): T & U {
    return { ...first, ...second };
}

interface BasicEmployee {
    id: number;
    name: string;
}

interface SalaryInfo {
    salary: number;
    department: string;
}

const basic: BasicEmployee = { id: 401, name: "Suresh Pillai" };
const salaryDetails: SalaryInfo = { salary: 74000, department: "Finance" };

const consolidatedRecord = mergeObjects(basic, salaryDetails);
console.log(`Merged record: ${consolidatedRecord.name} - ${consolidatedRecord.department} ($${consolidatedRecord.salary})`);

// Exercise 3: formatValue() with function overloads
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.trim().toUpperCase();
    }
    return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

console.log("Formatted string overload:", formatValue("  senior developer  "));
console.log("Formatted number overload:", formatValue(82500.5));

// Exercise 4: getEmployeeProperty() using keyof and indexed access
interface EmployeeRecord {
    id: number;
    name: string;
    salary: number;
}

function getEmployeeProperty<K extends keyof EmployeeRecord>(
    emp: EmployeeRecord,
    key: K
): EmployeeRecord[K] {
    return emp[key];
}

const sampleEmp: EmployeeRecord = { id: 501, name: "Sneha Roy", salary: 91000 };
const retrievedId = getEmployeeProperty(sampleEmp, "id");
const retrievedName = getEmployeeProperty(sampleEmp, "name");
const retrievedSalary = getEmployeeProperty(sampleEmp, "salary");

console.log(`Retrieved properties: id=${retrievedId}, name=${retrievedName}, salary=${retrievedSalary}`);

// Exercise 5 (Challenge): Employee statuses with 'as const' and derived Status union
const EMPLOYEE_STATUS_LIST = ["Active", "OnLeave", "Probation", "Terminated"] as const;
type EmployeeStatus = typeof EMPLOYEE_STATUS_LIST[number];

function validateStatus(status: EmployeeStatus): void {
    console.log(`Status '${status}' is valid.`);
}

validateStatus("Active");
validateStatus("Probation");

export {
    getLength,
    mergeObjects,
    formatValue,
    getEmployeeProperty,
    EMPLOYEE_STATUS_LIST,
    validateStatus
};
export type { EmployeeStatus };
