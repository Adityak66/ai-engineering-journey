// Toggle this flag to see how .then() vs .catch() behaves!
const isSuccess = true; 

// 1. getData()
function getData() {
    return new Promise((resolve, reject) => {
        console.log("1. Fetching data...");
        setTimeout(() => {
            if (isSuccess) {
                resolve({ data: "Sample Dataset X" });
            } else {
                reject("Error: Server refused to send data.");
            }
        }, 1000);
    });
}

// 2. loginUser()
function loginUser(username) {
    return new Promise((resolve, reject) => {
        console.log(`2. Attempting to log in [${username}]...`);
        setTimeout(() => {
            if (isSuccess) {
                resolve({ id: 101, username: username });
            } else {
                reject("Error: Invalid credentials or network timeout.");
            }
        }, 1000);
    });
}

// 3. getProfile()
function getProfile(user) {
    return new Promise((resolve, reject) => {
        console.log(`3. Fetching profile for User ID: ${user.id}...`);
        setTimeout(() => {
            if (isSuccess) {
                resolve({ id: user.id, role: "Admin", bio: "Loves JavaScript" });
            } else {
                reject("Error: Profile could not be loaded.");
            }
        }, 1000);
    });
}

// ==========================================
// Promise Consumption (.then, .catch, .finally)
// ==========================================

console.log("=== Independent Promise Consumption ===\n");

// Consuming getData()
getData()
    .then(result => {
        console.log("getData SUCCESS:", result);
    })
    .catch(error => {
        console.log("getData FAILED:", error);
    })
    .finally(() => {
        console.log("getData process has finished.\n");
    });

// Consuming loginUser() and getProfile() sequentially via chaining
// Using a setTimeout so the console logs don't jumble with getData()
setTimeout(() => {
    console.log("=== Chained Promise Consumption ===\n");
    
    loginUser("aditya_k")
        .then(user => {
            console.log("Login SUCCESS:", user);
            // Return the next promise to chain them!
            return getProfile(user); 
        })
        .then(profile => {
            console.log("Profile Fetched SUCCESS:", profile);
        })
        .catch(error => {
            // This single catch block handles errors from BOTH loginUser and getProfile
            console.log("Process FAILED:", error);
        })
        .finally(() => {
            console.log("Authentication & Profile flow is done.");
        });
        
}, 2500); 
