// coding-test/promises.js — Exercise 4 & 5: Promises and async/await with Fetch

// 1. Basic Promise constructor with setTimeout
function fetchMockData(success = true, delay = 200) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({ status: 200, message: "Mock data received successfully" });
            } else {
                reject(new Error("Failed to retrieve mock data"));
            }
        }, delay);
    });
}

// 2. Async/Await Consumer with Try/Catch and Response Validation
async function executeFetchDemo() {
    console.log("1. Starting async mock operation...");
    const mock = await fetchMockData(true, 100);
    console.log("Mock Result:", mock.message);

    console.log("\n2. Fetching real remote user from JSONPlaceholder...");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        // Essential check: 404 or 500 does NOT reject fetch, so response.ok is mandatory!
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();
        console.log(`Fetched user: ${user.name} (${user.email}) from ${user.company.name}`);
    } catch (err) {
        console.error("Fetch failed:", err.message);
    }
}

executeFetchDemo();
