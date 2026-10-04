// ==========================================
// Basic Closure Example
// ==========================================

function createCounter() {
    let count = 0; 
    
    // We are returning a function itself, not executing it yet!
    return function () {
        count++;
        return count;
    };
}

// createCounter() executes, sets count to 0, and returns the inner function.
// Even though createCounter() has finished and is gone from memory,
// the returned inner function STILL remembers 'count' via Closure.
const counter = createCounter(); 

console.log("=== Basic Closure Counter ===");
console.log("Call 1:", counter()); // 1
console.log("Call 2:", counter()); // 2
console.log("Call 3:", counter()); // 3
