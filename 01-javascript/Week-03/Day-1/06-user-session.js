// Challenge 3: User Session (Closures)

function createUserSession(username) {
    // Private state: Only accessible by the returned methods
    let currentUser = username;
    
    return {
        getUser() {
            if (currentUser) {
                return `Currently logged in as: ${currentUser}`;
            } else {
                return "No user logged in.";
            }
        },
        logout() {
            console.log(`Logging out user: ${currentUser}...`);
            currentUser = null;
        }
    };
}

console.log("=== User Session Flow ===");

const session = createUserSession("Aditya");

// 1. Check user
console.log(session.getUser());

// 2. Logout
session.logout();

// 3. Check user again
console.log(session.getUser());
