// ==========================================
// 09-unknown.ts — Unknown vs Any & Type Narrowing
// ==========================================
// 'any': Disables type checking completely (dangerous!).
// 'unknown': Type-safe counterpart to any. Forces you to perform type checking (narrowing) before usage.

let unsafeAny: any = "Hello";
console.log("=== 09-unknown ===");
console.log("any allows anything (even non-existent methods at runtime):", unsafeAny.toUpperCase());

let safeUnknown: unknown = "Hello TypeScript";

// ❌ The compiler stops you from calling methods on unknown directly:
// safeUnknown.toUpperCase(); // Error: 'safeUnknown' is of type 'unknown'.

// ✅ You must prove its type via narrowing (type guards) first:
if (typeof safeUnknown === "string") {
    console.log("Safely narrowed unknown to string:", safeUnknown.toUpperCase());
}

// Changing value to a number
safeUnknown = 250;
if (typeof safeUnknown === "number") {
    console.log("Safely narrowed unknown to number:", safeUnknown * 4);
}
