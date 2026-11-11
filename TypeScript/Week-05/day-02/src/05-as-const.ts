// 05-as-const.ts
// 'as const' assertions preserve literal types, prevent type widening, and mark object properties as readonly.

// Without 'as const': TypeScript widens literal values to general types (string, number)
const regularEmployee = {
    name: "Rahul",
    department: "IT"
};
// regularEmployee.department is typed as 'string', allowing any string reassignment:
regularEmployee.department = "Finance";

// With 'as const': values are locked to their exact literal types and made readonly
const constEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
} as const;

// The inferred type of constEmployee is:
// {
//   readonly id: 101;
//   readonly name: "Rahul";
//   readonly salary: 50000;
//   readonly department: "IT";
// }

// The following reassignments would produce compile errors:
// constEmployee.name = "Priya"; // Error: Cannot assign to 'name' because it is a read-only property

type ConstEmployeeType = typeof constEmployee;
type EmployeeKeys = keyof ConstEmployeeType; // "id" | "name" | "salary" | "department"
type ExactEmployeeName = ConstEmployeeType["name"]; // "Rahul"

console.log("Const employee name literal:", constEmployee.name);

// Deriving union types from readonly arrays using 'as const'
const EMPLOYEE_STATUSES = ["pending", "approved", "rejected"] as const;

// Indexed access on the array type extracts the union of element literals
type Status = typeof EMPLOYEE_STATUSES[number]; // "pending" | "approved" | "rejected"

function updateEmployeeStatus(id: number, status: Status): void {
    console.log(`Employee ${id} status updated to: ${status}`);
}

updateEmployeeStatus(101, "approved");
// updateEmployeeStatus(101, "archived"); // Error: Type '"archived"' is not assignable to type 'Status'

// Fixed role configuration tuple
const PERMISSION_LEVELS = ["read", "write", "admin"] as const;
type Permission = typeof PERMISSION_LEVELS[number];

console.log("Allowed statuses count:", EMPLOYEE_STATUSES.length);
console.log("Available permissions:", PERMISSION_LEVELS.join(", "));

export type { ConstEmployeeType, Status, Permission };
export { EMPLOYEE_STATUSES, PERMISSION_LEVELS, updateEmployeeStatus };
