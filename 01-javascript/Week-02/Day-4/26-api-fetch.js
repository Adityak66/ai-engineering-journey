async function getPosts() {
    console.log("Fetching posts from JSONPlaceholder API...");
    
    try {
        // 1. fetch() initiates the HTTP request and returns a Promise
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        // 2. response.json() reads the JSON string stream and parses it into JavaScript Objects
        const data = await response.json();
        
        console.log(`\n✅ Success! Fetched ${data.length} posts.`);
        console.log("\nHere is a peek at the data:");
        
        // Slicing to the first 3 items so it doesn't flood your console with 100 posts!
        console.log(data.slice(0, 3));
        
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}

getPosts();
