// ============================================================================
// 10-final-practice.ts — 10 TypeScript Foundation Exercises
// ============================================================================

console.log("=================================================");
console.log("🚀 EXECUTING TYPESCRIPT DAY 01 FINAL PRACTICE");
console.log("=================================================\n");

// ----------------------------------------------------------------------------
// 1. Employee profile variables with appropriate types
// ----------------------------------------------------------------------------
let empId: number = 101;
let empFullName: string = "Aditya Sharma";
let empIsFullTime: boolean = true;
let empSalary: number = 75000;
console.log(`[Ex 1] Employee Profile: #${empId} ${empFullName}, Full-time: ${empIsFullTime}, Salary: ₹${empSalary}`);

// ----------------------------------------------------------------------------
// 2. Calculate salary plus bonus
// ----------------------------------------------------------------------------
let basePay: number = 60000;
let quarterlyBonus: number = 12000;
let grossCompensation: number = basePay + quarterlyBonus;
console.log(`[Ex 2] Compensation: Base(₹${basePay}) + Bonus(₹${quarterlyBonus}) = Gross(₹${grossCompensation})`);

// ----------------------------------------------------------------------------
// 3. Combine employee's first name and last name
// ----------------------------------------------------------------------------
let firstName: string = "Aditya";
let lastName: string = "K";
let completeName: string = `${firstName} ${lastName}`;
console.log(`[Ex 3] Combined Name: ${completeName}`);

// ----------------------------------------------------------------------------
// 4. Boolean condition for an active employee
// ----------------------------------------------------------------------------
let isVerified: boolean = true;
let hasActiveContract: boolean = true;
let canAccessWorkspace: boolean = isVerified && hasActiveContract;
console.log(`[Ex 4] Workspace Access Granted: ${canAccessWorkspace ? "YES" : "NO"}`);

// ----------------------------------------------------------------------------
// 5. Declare variables using explicit type annotations
// ----------------------------------------------------------------------------
let companyRole: string = "AI Engineer";
let experienceYears: number = 3;
let isRemote: boolean = true;
console.log(`[Ex 5] Explicit Annotations: ${companyRole}, ${experienceYears} yrs, Remote: ${isRemote}`);

// ----------------------------------------------------------------------------
// 6. Examples using type inference
// ----------------------------------------------------------------------------
let primaryLanguage = "TypeScript"; // inferred as string
let frameworkCount = 4;             // inferred as number
let prefersStrict = true;           // inferred as boolean
console.log(`[Ex 6] Type Inference: ${primaryLanguage} (${typeof primaryLanguage}), ${frameworkCount} (${typeof frameworkCount})`);

// ----------------------------------------------------------------------------
// 7. Test valid and invalid assignments (demonstrating safety)
// ----------------------------------------------------------------------------
let flexibleScore: number = 95;
flexibleScore = 98; // ✅ Valid assignment
console.log(`[Ex 7] Valid Reassignment Score: ${flexibleScore}`);
// flexibleScore = "ninety-eight"; // ❌ Compiler stops this!

// ----------------------------------------------------------------------------
// 8. Function with a void return type
// ----------------------------------------------------------------------------
function logAuditRecord(action: string, performedBy: string): void {
    console.log(`[Ex 8] [AUDIT LOG - VOID] Action '${action}' recorded for user '${performedBy}'`);
}
logAuditRecord("DEPLOY_MODEL", empFullName);

// ----------------------------------------------------------------------------
// 9. Function returning never by throwing an error
// ----------------------------------------------------------------------------
function failValidation(field: string): never {
    throw new Error(`[Ex 9 Validation Failure] Mandatory field '${field}' is missing or invalid!`);
}

try {
    const testField = "";
    if (!testField) {
        failValidation("employeeEmail");
    }
} catch (error: any) {
    console.log(`[Ex 9] Handled Never-throwing function: ${error.message}`);
}

// ----------------------------------------------------------------------------
// 10. Accept unknown and safely check type before using it
// ----------------------------------------------------------------------------
function printIfString(value: unknown): void {
    if (typeof value === "string") {
        console.log(`[Ex 10 Safe Unknown Narrowing]: String in uppercase -> "${value.toUpperCase()}"`);
    } else if (typeof value === "number") {
        console.log(`[Ex 10 Safe Unknown Narrowing]: Number multiplied -> ${value * 10}`);
    } else {
        console.log(`[Ex 10 Safe Unknown Narrowing]: Value is of other type -> ${typeof value}`);
    }
}

printIfString("Hello TypeScript World");
printIfString(42);
printIfString(false);

console.log("\n=================================================");
console.log("🏁 ALL 10 EXERCISES EXECUTED SUCCESSFULLY!");
console.log("=================================================");
