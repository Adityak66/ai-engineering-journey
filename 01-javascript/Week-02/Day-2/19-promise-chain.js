// 1. Return a Promise for logging in
function loginUser(username) {
    return new Promise((resolve, reject) => {
        console.log(`[1] Logging in user: ${username}...`);
        setTimeout(() => {
            resolve({ id: 99, username: username });
        }, 1000);
    });
}

// 2. Return a Promise for getting the profile
function getUserProfile(user) {
    return new Promise((resolve, reject) => {
        console.log(`[2] Fetching profile for user ID: ${user.id}...`);
        setTimeout(() => {
            resolve({ userId: user.id, role: "Premium Member" });
        }, 1000);
    });
}

// 3. Return a Promise for fetching products based on profile
function getProducts(profile) {
    return new Promise((resolve, reject) => {
        console.log(`[3] Loading recommended products for role: ${profile.role}...`);
        setTimeout(() => {
            resolve(["Wireless Headphones", "Mechanical Keyboard", "4K Monitor"]);
        }, 1000);
    });
}


// Promise Chain: login -> profile -> products -> display

console.log("=== Starting Promise Chain ===\n");

loginUser("aditya")
    // Step 1: Login
    .then(user => {
        console.log("✔ Login successful!", user);
        return getUserProfile(user); // Returns a new Promise to continue the chain
    })
    // Step 2: Profile
    .then(profile => {
        console.log("✔ Profile loaded!", profile);
        return getProducts(profile); // Returns a new Promise to continue the chain
    })
    // Step 3 & 4: Products & Display
    .then(products => {
        console.log("✔ Products fetched!");
        
        console.log("\n🛍️  Recommended for you:");
        products.forEach(item => console.log(`  - ${item}`));
        
        console.log("\n=== Chain Complete! ===");
    })
    // Catch handles ANY error that occurs anywhere in the chain above
    .catch(error => {
        console.error("❌ An error occurred in the chain:", error);
    });

