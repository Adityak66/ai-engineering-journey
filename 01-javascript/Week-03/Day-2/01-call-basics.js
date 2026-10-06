// 1. Explicit Binding: call() Basics

// The call() method allows us to execute a function immediately
// while explicitly overriding what 'this' refers to.

function introduce(city) {
    // If called normally, 'this' would be the global object (or undefined).
    console.log(`${this.name} is from ${city}`);
}

const user = {
    name: "Aditya"
};

console.log("=== Using call() with User 1 ===");
// We force 'this' inside introduce() to point to the 'user' object. 
// The second argument "Nashik" is passed as the 'city' parameter.
introduce.call(user, "Nashik");


// Now let's try it with a different object!
const user2 = {
    name: "Rahul"
};

console.log("\n=== Using call() with User 2 ===");
// We reuse the EXACT SAME function, but dynamically swap the context.
introduce.call(user2, "Pune");
