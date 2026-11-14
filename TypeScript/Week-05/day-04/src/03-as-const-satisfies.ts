// 03-as-const-satisfies.ts
// Literal preservation with 'as const' and type-safe validation using the 'satisfies' operator.

// 1. 'as const' locks values to exact literal types and marks properties readonly
const STATUS_OPTIONS = ["pending", "approved", "rejected"] as const;
type Status = typeof STATUS_OPTIONS[number]; // "pending" | "approved" | "rejected"

const currentStatus: Status = "approved";
console.log("Status value:", currentStatus);

// 2. 'satisfies' operator validates structure while preserving precise inferred types
type Department = "IT" | "HR" | "Finance";

const departmentSalaries = {
    IT: 50000,
    HR: 40000,
    Finance: 45000
} satisfies Record<Department, number>;

// Because 'satisfies' retains exact property names (IT, HR, Finance),
// autocomplete works and property types are known directly:
console.log("IT Salary:", departmentSalaries.IT.toLocaleString());

// Contrasting with type annotation:
// With type annotation ': Record<Department, number>', the specific keys are widened to the general index type.
// With 'satisfies', exact literal keys and values are retained while validating conformance.

export type { Status, Department };
export { STATUS_OPTIONS, departmentSalaries };
