"use strict";
// ==========================================
// 07-void.ts — Void Return Type
// ==========================================
// 'void' represents the absence of any returned value (side-effect functions).
function showMessage(message) {
    console.log(`[Log]: ${message}`);
    // return; is allowed, but returning any data like `return 42;` causes a type error!
}
console.log("=== 07-void ===");
showMessage("Welcome to TypeScript! Void functions execute and finish normally without returning a value.");
