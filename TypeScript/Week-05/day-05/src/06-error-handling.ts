// 06-error-handling.ts
// Robust error handling in TypeScript using 'unknown' and 'instanceof Error'.

// Helper function to safely extract an error message from an unknown error value
function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    return "An unexpected error occurred";
}

// Simulated network call that might throw
async function simulateApiCall(shouldFail: boolean): Promise<string> {
    if (shouldFail) {
        throw new Error("HTTP 500: Internal Server Error");
    }
    return "Payload received successfully";
}

async function runErrorHandlingDemo(): Promise<void> {
    // 1. Handling standard Error instances
    try {
        const response = await simulateApiCall(true);
        console.log(response);
    } catch (error: unknown) {
        // TypeScript treats caught errors as 'unknown' under 'useUnknownInCatchVariables' (enabled by strict: true)
        console.error("Caught error:", getErrorMessage(error));
    }

    // 2. Handling non-Error thrown values safely
    try {
        throw "Connection timed out"; // Thrown raw string
    } catch (error: unknown) {
        console.error("Caught non-Error payload:", getErrorMessage(error));
    }
}

runErrorHandlingDemo();

export { getErrorMessage };
