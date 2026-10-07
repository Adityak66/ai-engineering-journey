// Final Comparison: call() vs apply() vs bind()

function introduce(city, role) {
    console.log(
        `${this.name} is from ${city} and works as ${role}`
    );
}

const user = {
    name: "Aditya"
};


// 1. call()

/*
    Difference: 
    - Executes the function immediately.
    - Additional arguments are passed normally, separated by commas.
*/
console.log("--- call() ---");
introduce.call(user, "Nashik", "AI Engineer");



// 2. apply()

/*
    Difference: 
    - Executes the function immediately.
    - Additional arguments MUST be passed together inside a single Array.
*/
console.log("\n--- apply() ---");
introduce.apply(user, ["Nashik", "AI Engineer"]);



// 3. bind()

/*
    Difference: 
    - DOES NOT execute the function immediately!
    - It creates and returns a brand-new function with 'this' permanently locked to the object.
    - You supply the normal arguments when you finally decide to invoke that new function.
*/
console.log("\n--- bind() ---");
const introduceUser = introduce.bind(user);

// Calling the bounded function later on:
introduceUser("Nashik", "AI Engineer");

