// 01-identity.ts
// Generic identity function that preserves the caller's exact type without using 'any'.

function identity<T>(value: T): T {
    return value;
}

interface Employee {
    id: number;
    name: string;
}

const employeeName = identity<string>("Aditya");
const employeeAge = identity(25);
const employeeRecord = identity<Employee>({ id: 101, name: "Rahul" });

console.log("String:", employeeName.toUpperCase());
console.log("Number:", employeeAge.toFixed(0));
console.log("Object:", employeeRecord.name);

export { identity };
