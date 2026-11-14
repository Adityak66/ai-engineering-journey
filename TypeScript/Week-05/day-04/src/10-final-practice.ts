// 10-final-practice.ts
// Final consolidation covering all Day 4 concepts: index signatures, as const, satisfies,
// mapped types, conditional types, infer, custom type guards, discriminated unions, and assertions.

// 1. Domain Models
interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

// 2. Index signature: EmployeeDictionary
interface EmployeeDictionary {
    [key: string]: Employee;
}

// 3. 'as const' status array & derived union type
const EMPLOYEE_STATUS_LIST = ["active", "inactive", "pending"] as const;
type Status = typeof EMPLOYEE_STATUS_LIST[number];

// 4. 'satisfies' operator with department configuration
type DepartmentCode = "ENG" | "HR" | "FIN";
const departmentConfig = {
    ENG: { name: "Engineering", head: 101 },
    HR: { name: "Human Resources", head: 102 },
    FIN: { name: "Finance", head: 103 }
} satisfies Record<DepartmentCode, { name: string; head: number }>;

// 5. Generic mapped type: Optional<T> and Readonly<T>
type Optional<T> = {
    [K in keyof T]?: T[K];
};

type ReadonlyRecord<T> = {
    readonly [K in keyof T]: T[K];
};

type EmployeePatch = Optional<Employee>;
type FrozenEmployee = ReadonlyRecord<Employee>;

// 6. Conditional types: IsString<T> and ElementType<T> using infer
type IsString<T> = T extends string ? true : false;
type ElementType<T> = T extends Array<infer Item> ? Item : T;

// 7. Custom type guard: isEmployee()
function isEmployee(value: unknown): value is Employee {
    if (typeof value !== "object" || value === null) return false;
    const item = value as Record<string, unknown>;
    return (
        typeof item.id === "number" &&
        typeof item.name === "string" &&
        typeof item.salary === "number" &&
        typeof item.department === "string"
    );
}

// 8. Discriminated union: ApiResponse
type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "error"; message: string };

function processResponse<T>(res: ApiResponse<T>): void {
    if (res.status === "success") {
        console.log("Success response received:", res.data);
    } else {
        console.log("Error response received:", res.message);
    }
}

// 9. Assertion function
function assertEmployee(val: unknown): asserts val is Employee {
    if (!isEmployee(val)) {
        throw new Error("Value does not satisfy Employee contract");
    }
}

// Execution and integration check
const directory: EmployeeDictionary = {
    "emp-1": { id: 1, name: "Rahul", salary: 50000, department: "IT" },
    "emp-2": { id: 2, name: "Priya", salary: 60000, department: "HR" }
};

const rawInput: unknown = { id: 3, name: "Aditya", salary: 75000, department: "Engineering" };
assertEmployee(rawInput);
directory["emp-3"] = rawInput;

console.log(`Directory size: ${Object.keys(directory).length}`);
console.log(`Engineering head: ${departmentConfig.ENG.head}`);
processResponse({ status: "success", data: directory["emp-3"] });

export {
    EMPLOYEE_STATUS_LIST,
    departmentConfig,
    isEmployee,
    processResponse,
    assertEmployee
};
export type {
    Employee,
    EmployeeDictionary,
    Status,
    DepartmentCode,
    Optional,
    ReadonlyRecord,
    EmployeePatch,
    FrozenEmployee,
    IsString,
    ElementType,
    ApiResponse
};
