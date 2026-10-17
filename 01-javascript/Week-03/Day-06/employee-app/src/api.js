// ============================================================================
// src/api.js — Remote API Integration (JSONPlaceholder)
// ============================================================================

const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Fetches remote user data and transforms it into the application's employee schema.
 * Demonstrates async/await, fetch(), response.ok check, and array mapping.
 */
export async function fetchEmployees() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}: Failed to load remote employees`);
        }

        const users = await response.json();

        // Transform remote API user schema into our employee domain model
        return users.map(user => {
            // Optional chaining and nullish coalescing to safely extract properties
            const companyName = user.company?.name ? user.company.name.split(" ")[0] : "General";
            const city = user.address?.city ?? "Remote";

            return {
                id: user.id,
                name: user.name,
                department: companyName,
                // Generate a realistic demo salary based on ID
                salary: 40000 + (user.id * 5000),
                city: city,
                email: user.email?.toLowerCase() ?? "user@example.com"
            };
        });
    } catch (error) {
        console.error("[API Error] fetchEmployees failed:", error.message);
        throw error; // Re-throw so caller (app.js) can present UI error banner
    }
}
