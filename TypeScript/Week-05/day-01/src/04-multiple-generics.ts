// 04-multiple-generics.ts
// Generic functions with multiple type parameters and generic constraints.

// Merges two objects into a single combined object with intersection type T & U.
// Using 'extends object' ensures both arguments are valid objects that can be spread.
function merge<T extends object, U extends object>(first: T, second: U): T & U {
    return { ...first, ...second };
}

// Practice 3: Returns a typed tuple pair of two potentially distinct types
function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// 1. Merging employee identification with salary data
const personalInfo = { name: "Aditya", id: 101 };
const payrollInfo = { salary: 50000, department: "Engineering" };

const fullEmployeeRecord = merge(personalInfo, payrollInfo);

// TypeScript knows all properties from both types are available on fullEmployeeRecord:
console.log("Name:", fullEmployeeRecord.name);
console.log("ID:", fullEmployeeRecord.id);
console.log("Salary:", fullEmployeeRecord.salary);
console.log("Department:", fullEmployeeRecord.department);

// 2. Creating typed key-value pairs (tuples)
const idAndRolePair = createPair<number, string>(101, "Backend Engineer");
console.log("Tuple item 1 (number):", idAndRolePair[0]);
console.log("Tuple item 2 (string):", idAndRolePair[1]);

const statusPair = createPair("API_HEALTHY", true);
console.log("Inferred status tuple:", statusPair[0], statusPair[1]);

export { merge, createPair };
