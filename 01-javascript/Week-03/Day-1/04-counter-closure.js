// ==========================================
// Challenge 1: Object Methods & Private State
// ==========================================

function createCounter() {
    // This variable is entirely "private". 
    // It exists ONLY inside this lexical scope.
    let count = 0;

    // We return an object containing functions.
    // Every one of these functions has a CLOSURE over the 'count' variable.
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();

console.log("=== Counter Challenge ===");

counter.increment();
counter.increment();
console.log("Value after 2 increments:", counter.getValue()); // Expected: 2

counter.decrement();
console.log("Value after 1 decrement:", counter.getValue()); // Expected: 1


// 🔥 The True Power of Closures: Encapsulation / Private State
console.log("\n=== Testing Encapsulation ===");
console.log("Attempting to access counter.count directly:", counter.count); // Expected: undefined

// Why is it undefined?
// Because 'count' is NOT a property of the returned object! 
// It is a local variable safely trapped inside the closure. 
// No outside script can accidentally do `counter.count = 9999;`
