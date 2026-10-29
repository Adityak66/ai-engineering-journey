// ==========================================
// 05-in-and-instanceof.ts — Narrowing with 'in', 'instanceof', and Equality
// ==========================================

export {};

console.log("=== 05-in-and-instanceof ===");

// 1. Narrowing with the 'in' operator
type Employee = {
    name: string;
    salary: number;
};

type Customer = {
    name: string;
    loyaltyPoints: number;
};

function showDetails(person: Employee | Customer): void {
    if ("salary" in person) {
        // TypeScript narrows 'person' to Employee
        console.log(`[Employee] ${person.name} earns salary ₹${person.salary}`);
    } else {
        // TypeScript narrows 'person' to Customer
        console.log(`[Customer] ${person.name} has ${person.loyaltyPoints} loyalty points`);
    }
}

showDetails({ name: "Rahul", salary: 50000 });
showDetails({ name: "Aditya", loyaltyPoints: 1250 });

// 2. Narrowing with 'instanceof'
function formatDate(value: Date | string): string {
    if (value instanceof Date) {
        // TypeScript narrows 'value' to Date instance
        return `Date Object: ${value.toISOString()}`;
    }
    // TypeScript narrows 'value' to string
    return `Date String: ${value.toUpperCase()}`;
}

console.log(formatDate(new Date("2026-10-22")));
console.log(formatDate("2026-10-22T00:00:00Z"));

// 3. Narrowing with Equality Checks (===)
type Status = "pending" | "approved" | "rejected";

function describeStatus(status: Status): string {
    if (status === "approved") {
        return "Request accepted ✅";
    }
    if (status === "rejected") {
        return "Request declined ❌";
    }
    return "Waiting for review ⏳";
}

console.log("Status 'approved':", describeStatus("approved"));
console.log("Status 'pending':", describeStatus("pending"));
