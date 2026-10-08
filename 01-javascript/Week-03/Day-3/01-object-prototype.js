// 1. The Object Prototype


const user = {
    name: "Aditya"
};

console.log("User name:", user.name);

// Every object in JavaScript secretly inherits from a master blueprint called the Prototype.
console.log("\nUser's hidden prototype object:");
console.log(Object.getPrototypeOf(user));

// Let's prove that this hidden blueprint is literally the global Object.prototype
console.log("\nIs user's prototype === Object.prototype?");
console.log(Object.getPrototypeOf(user) === Object.prototype); 

