// 3. Built-In Prototypes (Arrays)


const numbers = [10, 20, 30]; 

console.log("=== Inspecting Array Prototypes ===");

// Check the prototype (__proto__ is older syntax, getPrototypeOf is modern)
// This reveals the massive object containing push(), pop(), map(), filter(), etc!
console.log("What is the prototype of our array?");
console.log(Object.getPrototypeOf(numbers)); 

// Let's prove that our array inherits directly from the global Array blueprint
console.log("\nIs our array's prototype === Array.prototype?");
console.log(Object.getPrototypeOf(numbers) === Array.prototype); 

/*
    The FULL Prototype Chain for Arrays:
    
    numbers (our specific array)
       ↓
    Array.prototype (provides map, filter, push, includes)
       ↓
    Object.prototype (provides toString, hasOwnProperty)
       ↓
    null (end of the line, search stops)
*/

