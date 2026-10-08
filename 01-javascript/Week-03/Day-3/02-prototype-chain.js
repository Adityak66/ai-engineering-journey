// 2. The Prototype Chain Lookup


const user = { 
    name: "Aditya" 
}; 

console.log("=== Accessing a missing method ===");
// We did NOT define toString() on our user object.
// But it exists anyway!
console.log(user.toString);

console.log("\nExecuting it:");
console.log(user.toString());

/*
    How did JavaScript find it? (The Prototype Chain Lookup Flow)
    
    user.toString()
          ↓
    Is toString() directly inside the 'user' object?
          ↓
    NO
          ↓
    Check the hidden prototype (Object.getPrototypeOf(user))
          ↓
    Does Object.prototype have toString()?
          ↓
    YES! Execute it.
*/

