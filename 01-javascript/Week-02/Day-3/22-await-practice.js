function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Aditya"
            });
        }, 1000);
    });
}

async function showUser() {
    console.log("Fetching user data... (waiting 1 second)");
    
    // 'await' pauses the execution of this function until getUser() resolves
    const user = await getUser();
    
    console.log("\nUser data received:");
    console.log(user);
}

showUser();
