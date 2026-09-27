const BASE_URL = "https://jsonplaceholder.typicode.com";

// Simple helper function to keep the code clean
async function fetchJson(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} - Status: ${response.status}`);
    }
    return await response.json();
}

async function runExercises() {
    try {
        // --- 1. Fetch all users ---
        console.log("=== 1. Fetch all users ===");
        const users = await fetchJson("/users");
        console.log(`Loaded ${users.length} users.\n`);

        // --- 2. Fetch all posts ---
        console.log("=== 2. Fetch all posts ===");
        const posts = await fetchJson("/posts");
        console.log(`Loaded ${posts.length} posts.\n`);

        // --- 3. Fetch one post (/posts/1) ---
        console.log("=== 3. Fetch one post (/posts/1) ===");
        const singlePost = await fetchJson("/posts/1");
        console.log(`Post Loaded -> Title: "${singlePost.title}"\n`);

        // --- 4. Print user names ---
        console.log("=== 4. User Names ===");
        users.forEach(user => console.log(` - ${user.name}`));
        console.log("");

        // --- 5. Print user emails ---
        console.log("=== 5. User Emails ===");
        users.forEach(user => console.log(` - ${user.email}`));
        console.log("");

        // --- 6. Print company names ---
        console.log("=== 6. Company Names ===");
        users.forEach(user => console.log(` - ${user.company.name}`));
        console.log("\n===== DONE =====");

    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

runExercises();
