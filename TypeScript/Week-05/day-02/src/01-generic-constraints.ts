// 01-generic-constraints.ts
// Generic constraints using 'extends' to restrict accepted types and guarantee property presence.

// T must have a numeric length property.
// Valid types: string, Array, or any custom object with length: number.
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

const stringLength = getLength("Aditya"); // 6
const arrayLength = getLength([10, 20, 30]); // 3
const objectWithLength = getLength({ length: 42, label: "Custom Queue" }); // 42

console.log("String length:", stringLength);
console.log("Array length:", arrayLength);
console.log("Custom object length:", objectWithLength);

// The following line would trigger a compile-time error because number has no 'length' property:
// getLength(100);

// Multiple generic constraints: restricting both T and U to objects
function mergeObjects<T extends object, U extends object>(first: T, second: U): T & U {
    return { ...first, ...second };
}

interface BaseEmployee {
    id: number;
    name: string;
}

interface Compensation {
    salary: number;
    currency: string;
}

const baseEmp: BaseEmployee = { id: 101, name: "Rahul Sharma" };
const comp: Compensation = { salary: 55000, currency: "INR" };

const fullEmployee = mergeObjects(baseEmp, comp);
console.log(`Merged employee: ${fullEmployee.name}, ${fullEmployee.currency} ${fullEmployee.salary}`);

// Generic parameter default: T defaults to 'unknown' if not provided
interface ApiResponse<T = unknown> {
    data: T;
    success: boolean;
}

// When no type argument is provided, data is typed as unknown
const genericResponse: ApiResponse = {
    data: "Operation acknowledged",
    success: true
};

// Explicit type argument overrides the default
const typedResponse: ApiResponse<BaseEmployee> = {
    data: { id: 102, name: "Priya" },
    success: true
};

console.log("Generic response success:", genericResponse.success);
console.log("Typed response name:", typedResponse.data.name);

// Practice function: generic array length extractor
function getArrayLength<T extends { length: number }>(items: T): number {
    return items.length;
}

console.log("Practice getArrayLength:", getArrayLength(["TS", "Node", "React"]));

export { getLength, mergeObjects, getArrayLength };
