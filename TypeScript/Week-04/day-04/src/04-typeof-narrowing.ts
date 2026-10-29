// ==========================================
// 04-typeof-narrowing.ts — Type Narrowing via typeof
// ==========================================

export {};

console.log("=== 04-typeof-narrowing ===");

// TypeScript automatically narrows union types inside conditional type guards
function printId(id: string | number): void {
    if (typeof id === "string") {
        // In this branch, TypeScript knows 'id' is strictly string
        console.log("String ID (uppercase):", id.toUpperCase());
    } else {
        // In this branch, TypeScript knows 'id' is strictly number
        console.log("Numeric ID (formatted):", id.toFixed(0));
    }
}

printId("emp-101"); // EMP-101
printId(101.7);     // 102

// Narrowing boolean | number values
function calculateFee(input: boolean | number): number {
    if (typeof input === "boolean") {
        return input ? 100 : 0;
    }
    return input; // input is narrowed to number
}

console.log("Fee for true:", calculateFee(true));
console.log("Fee for custom amount ₹350:", calculateFee(350));
