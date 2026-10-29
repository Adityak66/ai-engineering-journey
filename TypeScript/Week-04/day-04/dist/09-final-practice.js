"use strict";
// ==========================================
// 09-final-practice.ts — 8 Final Practice Challenges
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=================================================");
console.log("🚀 TYPESCRIPT DAY 04: 8 FINAL PRACTICE CHALLENGES");
console.log("=================================================\n");
function normalizeId(id) {
    return typeof id === "number" ? `EMP-${id}` : id.toUpperCase();
}
console.log("[Ex 1] Normalized Numeric ID (101):", normalizeId(101));
console.log("[Ex 1] Normalized String ID ('emp-202'):", normalizeId("emp-202"));
function getEmailDisplay(emp) {
    return emp.email ? `Email: ${emp.email}` : "Email: Not provided";
}
const empWithEmail = { id: 1, name: "Aditya", email: "aditya@company.com" };
const empWithoutEmail = { id: 2, name: "Priya" };
console.log("[Ex 2]", getEmailDisplay(empWithEmail));
console.log("[Ex 2]", getEmailDisplay(empWithoutEmail));
// ----------------------------------------------------------------------------
// 3. Nested Address with Fallback
// ----------------------------------------------------------------------------
function getCity(employee) {
    return employee.address?.city ?? "Unknown";
}
console.log("[Ex 3] City for Priya (missing address):", getCity(empWithoutEmail));
console.log("[Ex 3] City for Aditya:", getCity({ id: 1, name: "Aditya", address: { city: "Nashik" } }));
// ----------------------------------------------------------------------------
// 4. API Value with typeof Narrowing
// ----------------------------------------------------------------------------
function processApiInput(payload) {
    if (typeof payload === "string") {
        return `Processed String: "${payload.trim().toUpperCase()}"`;
    }
    if (typeof payload === "number") {
        return `Processed Number: ₹${payload.toFixed(2)}`;
    }
    return `Unhandled payload of type: ${typeof payload}`;
}
console.log("[Ex 4]", processApiInput("  backend payload "));
console.log("[Ex 4]", processApiInput(1250.5));
console.log("[Ex 4]", processApiInput(null));
function getStatusBadge(status) {
    switch (status) {
        case "approved":
            return "[STATUS: APPROVED ✅] Proceed with onboarding.";
        case "rejected":
            return "[STATUS: REJECTED ❌] Application closed.";
        case "pending":
            return "[STATUS: PENDING ⏳] Awaiting manager sign-off.";
    }
}
console.log("[Ex 5]", getStatusBadge("approved"));
console.log("[Ex 5]", getStatusBadge("pending"));
const contractor = {
    id: 501,
    name: "Sneha Patel",
    salary: 72000,
    department: "Cloud Operations"
};
console.log(`[Ex 6] Contracted Employee: ${contractor.name} earns ₹${contractor.salary} in ${contractor.department}`);
function formatParticipant(person) {
    if ("badgeNumber" in person) {
        return `[Staff] ${person.name} (Badge: #${person.badgeNumber}, Salary: ₹${person.salary})`;
    }
    return `[Client] ${person.name} from ${person.company} (Contract: ₹${person.contractValue})`;
}
console.log("[Ex 7]", formatParticipant({ name: "Rahul", salary: 60000, badgeNumber: 88 }));
console.log("[Ex 7]", formatParticipant({ name: "Global Logistics Ltd", company: "GLL Corp", contractValue: 500000 }));
function isEmployee(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidate = value;
    return (typeof candidate.id === "number" &&
        typeof candidate.name === "string" &&
        typeof candidate.salary === "number");
}
const unvalidatedData = { id: 701, name: "Tanmay", salary: 65000 };
if (isEmployee(unvalidatedData)) {
    console.log(`[Ex 8] Custom Guard Verified Employee: ${unvalidatedData.name} (ID: ${unvalidatedData.id})`);
}
else {
    console.log("[Ex 8] Data is not a valid VerifiedEmployee");
}
console.log("\n=================================================");
console.log("🏁 ALL 8 CODING CHALLENGES VERIFIED SUCCESSFULLY!");
console.log("=================================================");
