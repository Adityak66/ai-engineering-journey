// ==========================================
// 08-never.ts — Never Return Type
// ==========================================
// 'never' represents values that NEVER occur.
// A function returning 'never' cannot complete normally: it always throws an error or runs forever.

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteProcess(): never {
    while (true) {
        // unreachable end
    }
}

console.log("=== 08-never ===");
console.log("void vs never:");
console.log("- void: completes normally, but returns no value (undefined).");
console.log("- never: NEVER completes normally (always throws or enters an infinite loop).");

// Testing error throwing function:
try {
    throwError("Deliberate error testing 'never' type");
} catch (err: any) {
    console.log("Caught expected error from never function:", err.message);
}
