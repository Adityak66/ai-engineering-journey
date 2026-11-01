export {};

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    return "An unknown error occurred";
}

async function loadData(): Promise<void> {
    try {
        throw new Error("Unable to connect to database");
    } catch (error: unknown) {
        console.error(getErrorMessage(error));
    }
}

loadData();
