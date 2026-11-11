// 07-get-property.ts
// Mastering the canonical generic property accessor pattern: T, K extends keyof T, and T[K].

// Retrieves the property at 'key' on 'object'.
// The return type is strictly inferred as the exact property type T[K].
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

const employee: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT",
    isActive: true
};

// Return types are strongly typed:
const empId: number = getProperty(employee, "id");
const empName: string = getProperty(employee, "name");
const empSalary: number = getProperty(employee, "salary");
const empDept: string = getProperty(employee, "department");
const empActive: boolean = getProperty(employee, "isActive");

console.log(`Employee ID: ${empId}`);
console.log(`Employee Name: ${empName}`);
console.log(`Employee Salary: $${empSalary.toLocaleString()}`);
console.log(`Department: ${empDept}`);
console.log(`Active: ${empActive}`);

// The following call is rejected by the compiler because "nonExistentKey" is not in keyof Employee:
// getProperty(employee, "nonExistentKey");

// Companion immutable updater: safely updates property K with a matching T[K] value
function setProperty<T extends object, K extends keyof T>(
    object: T,
    key: K,
    value: T[K]
): T {
    return {
        ...object,
        [key]: value
    };
}

const updatedEmployee = setProperty(employee, "salary", 58000);
console.log("Original salary:", employee.salary);
console.log("Updated salary:", updatedEmployee.salary);
console.log("Immutable update check:", employee !== updatedEmployee); // true

export { getProperty, setProperty };
