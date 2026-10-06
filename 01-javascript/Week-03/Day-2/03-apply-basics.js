// 3. Explicit Binding: apply() Basics

// apply() is functionally identical to call().
// The ONLY difference is how you pass the arguments:
// - call() uses a comma-separated list.
// - apply() takes a single ARRAY of arguments.

function introduce(city, profession) {
    console.log(
        `${this.name} is from ${city} and works as a ${profession}`
    );
}

const user = {
    name: "Aditya"
};

console.log("=== Using apply() ===");

// Visualizing the mapping:
// .apply(
//    user,                                  ---> becomes 'this'
//    ["Nashik", ".NET Developer"]           ---> unpacked automatically into (city, profession)
// )
introduce.apply(user, ["Nashik", ".NET Developer"]);
