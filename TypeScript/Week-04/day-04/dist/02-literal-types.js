"use strict";
// ==========================================
// 02-literal-types.ts — String Literal Types
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
let orderStatus = "pending";
console.log("=== 02-literal-types ===");
console.log("Initial Status:", orderStatus);
orderStatus = "approved"; // ✅ Valid
console.log("Updated Status:", orderStatus);
function writeLog(message, level) {
    console.log(`[${level.toUpperCase()}] ${message}`);
}
writeLog("Server initialized successfully", "info");
writeLog("High memory consumption detected", "warn");
writeLog("Database connection timeout", "error");
