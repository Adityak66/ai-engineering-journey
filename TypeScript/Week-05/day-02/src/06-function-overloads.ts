// 06-function-overloads.ts
// Function overloads define multiple valid call signatures for a single function implementation.

// 1. Basic formatting overloads
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    if (typeof value === "string") {
        return value.trim();
    }
    return `$${value.toFixed(2)}`;
}

console.log("Formatted string:", format("  Aditya Kale  "));
console.log("Formatted number:", format(45000));

// 2. Overload signatures with distinct return types
function getValue(value: string): string;
function getValue(value: number): number;
function getValue(value: boolean): boolean;
function getValue(value: string | number | boolean): string | number | boolean {
    return value;
}

// Callers receive accurately narrowed return types:
const strVal = getValue("Rahul");   // inferred as string
const numVal = getValue(22);        // inferred as number
const boolVal = getValue(true);     // inferred as boolean

console.log("strVal type check (string):", strVal.toUpperCase());
console.log("numVal type check (number):", numVal.toFixed(0));
console.log("boolVal type check (boolean):", boolVal ? "Yes" : "No");

// 3. Realistic employee lookup overload: find by numeric ID or string email
interface StaffMember {
    id: number;
    email: string;
    name: string;
}

const staffDirectory: StaffMember[] = [
    { id: 1, email: "rahul@company.com", name: "Rahul Sharma" },
    { id: 2, email: "priya@company.com", name: "Priya Patel" }
];

function findStaff(id: number): StaffMember | undefined;
function findStaff(email: string): StaffMember | undefined;
function findStaff(param: number | string): StaffMember | undefined {
    if (typeof param === "number") {
        return staffDirectory.find(staff => staff.id === param);
    }
    return staffDirectory.find(staff => staff.email.toLowerCase() === param.toLowerCase());
}

const byId = findStaff(1);
const byEmail = findStaff("priya@company.com");

console.log("Found by ID:", byId?.name);
console.log("Found by Email:", byEmail?.name);

export { format, getValue, findStaff };
