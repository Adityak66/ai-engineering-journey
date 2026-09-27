const BASE_URL = "https://jsonplaceholder.typicode.com";

// Generic helper function to handle the POST request structure
async function postData(endpoint, data) {
    console.log(`\n Sending POST request to ${endpoint}...`);
    
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // JavaScript Object -> JSON.stringify() -> JSON Text -> HTTP Body
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Parse the response back from JSON string to a JS object
        const responseData = await response.json();
        
        console.log(`Success! (Status: ${response.status})`);
        console.log("Response Data:", responseData);
        
    } catch (error) {
        console.error("Failed to POST data:", error.message);
    }
}

async function runExercises() {
    console.log("=== HTTP POST PRACTICE ===\n");

    // 1. Create Employee (Simulated using /posts endpoint)
    const employee = {
        name: "Aditya",
        department: "IT",
        salary: 60000
    };
    await postData("/posts", employee);

    // 2. Create Product (Simulated using /posts endpoint)
    const product = {
        name: "Mechanical Keyboard",
        price: 4500,
        category: "Electronics"
    };
    await postData("/posts", product);

    // 3. Create Todo (Using /todos endpoint)
    const todo = {
        title: "Finish Week 2 JavaScript fetch practice",
        completed: false,
        userId: 1
    };
    await postData("/todos", todo);

    // 4. Create Comment (Using /comments endpoint)
    const comment = {
        postId: 1,
        name: "Excellent Guide",
        email: "aditya@example.com",
        body: "Understanding the HTTP Body and Headers makes API integration so much easier."
    };
    await postData("/comments", comment);

    console.log("\n===== DONE =====");
}

runExercises();
