// 02-literal-types.ts — String Literal Types

export {};

// Literal types lock down permitted values to an exact set of predefined strings
type Status = "pending" | "approved" | "rejected";

let orderStatus: Status = "pending";
console.log("=== 02-literal-types ===");
console.log("Initial Status:", orderStatus);

orderStatus = "approved"; // ✅ Valid
console.log("Updated Status:", orderStatus);

// ❌ TypeScript compiler error:
// orderStatus = "completed"; // Error: Type '"completed"' is not assignable to type 'Status'.

// Function accepting strict string literal union
type LogLevel = "info" | "warn" | "error";

function writeLog(message: string, level: LogLevel): void {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

writeLog("Server initialized successfully", "info");
writeLog("High memory consumption detected", "warn");
writeLog("Database connection timeout", "error");
