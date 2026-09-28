const BASE_URL = "https://jsonplaceholder.typicode.com";

// 1. REUSABLE, PRODUCTION-READY FETCH FUNCTION

// This function handles the exact flow requested:
// HTTP failure -> response.ok -> throw Error -> catch()
async function fetchData(endpoint) {
    // 1. Await the network request
    const response = await fetch(`${BASE_URL}${endpoint}`);

    // 2. Check if the HTTP status code is a failure (404, 500, etc.)
    if (!response.ok) {
        // Custom error messages based on status
        if (response.status === 404) {
            throw new Error(`404 Not Found: Could not locate resource at ${endpoint}`);
        }
        if (response.status === 401) {
            throw new Error("401 Unauthorized: Please log in to view this.");
        }
        if (response.status >= 500) {
            throw new Error(`500 Server Error: The backend crashed!`);
        }
        
        // Generic fallback
        throw new Error(`HTTP Error: ${response.status}`);
    }

    // 3. Only parse and return if the response was OK (200-299)
    return await response.json();
}

// 2. CONSUMING THE API WITH TRY / CATCH / FINALLY

async function loadUsers() {
    console.log("--- 1. Testing a Successful Request ---");
    
    try {
        // This simulates a loading spinner turning ON in React
        console.log("Loading..."); 

        const users = await fetchData("/users");
        
        console.log(`Success! Loaded ${users.length} users.`);
    } 
    catch (error) {
        console.error("Failed:", error.message);
    } 
    finally {
        // This simulates a loading spinner turning OFF in React
        console.log("Finished loading.\n");
    }
}

async function loadSecretData() {
    console.log("--- 2. Testing a 404 (Not Found) Request ---");
    
    try {
        console.log("Loading secret data..."); 

        // This endpoint deliberately doesn't exist!
        const data = await fetchData("/invalid-secret-endpoint"); 
        
        // This line will NEVER run because the fetch throws a 404 error
        console.log(data);
    } 
    catch (error) {
        // Our custom 404 error from fetchData() gets caught right here!
        console.error("Failed:", error.message);
    } 
    finally {
        console.log("Finished loading.\n");
    }
}

// RUNNER

async function runPractice() {
    await loadUsers();
    await loadSecretData();
}

runPractice();
