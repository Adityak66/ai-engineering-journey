// 08-discriminated-unions.ts
// Tagged/Discriminated unions for robust modeling of API states and domain variants.

interface Employee {
    id: number;
    name: string;
    department: string;
}

// Discriminated union with common tag property: 'status'
type ApiResult =
    | { status: "loading" }
    | { status: "success"; data: Employee[]; timestamp: string }
    | { status: "error"; message: string; code: number };

function handleApiResult(result: ApiResult): void {
    switch (result.status) {
        case "loading":
            console.log("Fetching employee dataset...");
            break;
        case "success":
            // TypeScript automatically narrows 'result' to { status: "success"; data: Employee[]; timestamp: string }
            console.log(`Success: Loaded ${result.data.length} records at ${result.timestamp}`);
            break;
        case "error":
            // TypeScript automatically narrows 'result' to { status: "error"; message: string; code: number }
            console.log(`Error [${result.code}]: ${result.message}`);
            break;
    }
}

// Verification calls
handleApiResult({ status: "loading" });
handleApiResult({
    status: "success",
    data: [{ id: 101, name: "Rahul", department: "IT" }],
    timestamp: new Date().toISOString()
});
handleApiResult({ status: "error", message: "Failed to connect to backend", code: 503 });

export type { Employee, ApiResult };
export { handleApiResult };
