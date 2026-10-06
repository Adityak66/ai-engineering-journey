// 2. call() with Multiple Arguments

// Rule:
// Argument 1: The object that 'this' should point to.
// Argument 2+: The normal arguments passed into the function, separated by commas.

function introduce(city, profession) {
    console.log(
        `${this.name} is from ${city} and works as a ${profession}`
    );
}

const user = {
    name: "Aditya"
};

console.log("=== call() mapping multiple arguments ===");

// Visualizing the mapping:
// .call(
//    user,               ---> becomes 'this'
//    "Nashik",           ---> becomes 'city'
//    ".NET Developer"    ---> becomes 'profession'
// )
introduce.call(user, "Nashik", ".NET Developer");


// Trying it with another object just to cement the concept
const colleague = {
    name: "Sarah"
};

introduce.call(colleague, "London", "Data Scientist");
