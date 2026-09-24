// ==========================================
// Part 1: Synchronous Error Handling
// ==========================================
console.log("=== Synchronous Error Handling ===\n");

// 1. Function that throws Error
function riskySyncFunction() {
    console.log("Running risky sync function...");
    // Manually throwing a new Error object
    throw new Error("Something went terribly wrong in the sync process!");
}

try {
    // Attempt to execute the code
    riskySyncFunction();
} catch (error) {
    // 2. Catch the error
    // 3. Print error.message
    console.error("❌ Caught a sync error! Message:", error.message);
} finally {
    // 4. Add finally
    console.log("🏁 Sync finally block: This runs no matter what (success or crash).\n");
}

// ==========================================
// Part 2: Asynchronous Error Handling
// ==========================================
console.log("=== Asynchronous Error Handling ===\n");

// 5. Create async function that rejects
function riskyAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Rejecting the Promise with an Error object
            reject(new Error("Network connection failed asynchronously!"));
        }, 1000);
    });
}

// 6. Handle rejection using try/catch in an async function
async function handleAsyncError() {
    try {
        console.log("Awaiting risky async function... (waiting 1 second)");
        
        const data = await riskyAsyncFunction();
        
        // This line is skipped entirely because the await throws an exception!
        console.log("Data received:", data);
        
    } catch (error) {
        // The rejected Promise is caught here, exactly like a sync throw!
        console.error("❌ Caught an async error! Message:", error.message);
    } finally {
        console.log("🏁 Async finally block: Perfect for cleaning up loading spinners.");
    }
}

handleAsyncError();

