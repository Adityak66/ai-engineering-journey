"use strict";
// ==========================================
// 05-in-and-instanceof.ts — Narrowing with 'in', 'instanceof', and Equality
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 05-in-and-instanceof ===");
function showDetails(person) {
    if ("salary" in person) {
        // TypeScript narrows 'person' to Employee
        console.log(`[Employee] ${person.name} earns salary ₹${person.salary}`);
    }
    else {
        // TypeScript narrows 'person' to Customer
        console.log(`[Customer] ${person.name} has ${person.loyaltyPoints} loyalty points`);
    }
}
showDetails({ name: "Rahul", salary: 50000 });
showDetails({ name: "Aditya", loyaltyPoints: 1250 });
// 2. Narrowing with 'instanceof'
function formatDate(value) {
    if (value instanceof Date) {
        // TypeScript narrows 'value' to Date instance
        return `Date Object: ${value.toISOString()}`;
    }
    // TypeScript narrows 'value' to string
    return `Date String: ${value.toUpperCase()}`;
}
console.log(formatDate(new Date("2026-10-22")));
console.log(formatDate("2026-10-22T00:00:00Z"));
function describeStatus(status) {
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
