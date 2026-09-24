async function getUser() {
    return "Aditya";
}

// 1. Direct console log
console.log("--- Direct console.log ---");
console.log(getUser());

// 2. Using .then()
console.log("\n--- Using .then() ---");
getUser().then(user => {
    console.log(user);
});

