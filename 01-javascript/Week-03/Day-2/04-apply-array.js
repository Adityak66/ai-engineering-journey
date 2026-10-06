// 4. The Clever Array Hack using apply()


const numbers = [10, 20, 30, 40, 50];

console.log("=== Math.max problem ===");
// Math.max() expects comma-separated arguments: Math.max(10, 20, 30)
// It DOES NOT understand arrays.
console.log("Direct array passing fails:", Math.max(numbers)); // NaN

console.log("\n=== The Historical apply() Solution ===");
// Before ES6 (2015), developers used apply() to solve this problem!
// 1. We pass 'null' because Math.max doesn't care about 'this'.
// 2. We pass the 'numbers' array.
// 3. apply() explodes the array into comma-separated arguments behind the scenes.
const maxUsingApply = Math.max.apply(null, numbers);
console.log("Using apply() succeeds:", maxUsingApply); // 50

console.log("\n=== The Modern ES6 Solution ===");
// Today, we use the Spread Operator (...) to achieve the exact same "unpacking" behavior.
const maxUsingSpread = Math.max(...numbers);
console.log("Using spread operator succeeds:", maxUsingSpread); // 50
