// 07-final-practice.ts
// Consolidated final practice covering all eight Day 3 utility type exercises.

interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department: string;
    email?: string;
    // Nested object to illustrate shallow behavior of Partial/Readonly
    metadata: {
        createdAt: string;
        updatedBy: string;
    };
}

// 1. CreateEmployee using Omit
type CreateEmployee = Omit<Employee, "id" | "metadata">;

// 2. UpdateEmployee using Partial
type UpdateEmployee = Partial<Omit<Employee, "id" | "metadata">>;

// 3. EmployeeSummary using Pick
type EmployeeSummary = Pick<Employee, "id" | "name" | "department">;

// 4. EmployeeRecord using Record
type EmployeeRecord = Record<number, Employee>;

// 5. Status unions using Exclude and Extract
type EmploymentStatus = "active" | "on-leave" | "probation" | "terminated";
type WorkingStatus = Exclude<EmploymentStatus, "terminated">; // "active" | "on-leave" | "probation"
type ReviewableStatus = Extract<EmploymentStatus, "probation" | "active">; // "active" | "probation"

// 6. Non-nullable employee type
type MaybeEmployee = Employee | null | undefined;
type ValidEmployee = NonNullable<MaybeEmployee>;

// 7. Extract function parameters and return type
function registerEmployee(payload: CreateEmployee, addedBy: string): ValidEmployee {
    return {
        id: Math.floor(Math.random() * 10000),
        ...payload,
        metadata: {
            createdAt: new Date().toISOString(),
            updatedBy: addedBy
        }
    };
}

type RegisterParams = Parameters<typeof registerEmployee>;
type RegisterReturn = ReturnType<typeof registerEmployee>;

// 8. Extract async resolved type using Awaited
async function fetchActiveRoster(
    store: EmployeeRecord
): Promise<EmployeeSummary[]> {
    return Object.values(store).map(({ id, name, department }) => ({
        id,
        name,
        department
    }));
}

type RosterResult = Awaited<ReturnType<typeof fetchActiveRoster>>;

// Execution verification
async function runFinalExercises(): Promise<void> {
    const args: RegisterParams = [
        { name: "Priya", salary: 65000, department: "Engineering", email: "priya@company.com" },
        "admin-01"
    ];

    const newEmp: RegisterReturn = registerEmployee(...args);
    const store: EmployeeRecord = {
        [newEmp.id]: newEmp
    };

    const currentStatus: WorkingStatus = "active";
    const reviewStatus: ReviewableStatus = "probation";
    console.log(`Registered ${newEmp.name} | Statuses: ${currentStatus}, ${reviewStatus}`);

    const updatePayload: UpdateEmployee = { salary: 68000 };
    console.log("Update payload prepared:", updatePayload);

    const summaries: RosterResult = await fetchActiveRoster(store);
    console.log("Active summaries fetched:", summaries);

    // Note: Partial and Readonly are shallow transformations.
    // Making an Employee Readonly protects top-level properties, while nested metadata remains mutable
    // unless DeepReadonly is explicitly applied.
    const readonlyEmp: Readonly<Employee> = newEmp;
    // readonlyEmp.name = "Other"; // Compile error
    readonlyEmp.metadata.updatedBy = "system-sync"; // Nested property remains mutable
    console.log("Updated nested metadata:", readonlyEmp.metadata.updatedBy);
}

runFinalExercises();

export type {
    CreateEmployee,
    UpdateEmployee,
    EmployeeSummary,
    EmployeeRecord,
    WorkingStatus,
    ReviewableStatus,
    ValidEmployee,
    RegisterParams,
    RegisterReturn,
    RosterResult
};
