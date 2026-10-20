// coding-test/closure.js — Exercise 1: Closure Counter & Encapsulation

function createCounter(initialValue = 0) {
    let count = initialValue; // Private variable trapped inside lexical environment

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter(5);
console.log("Initial count:", counter.getValue()); // 5
console.log("Increment:", counter.increment());     // 6
console.log("Increment:", counter.increment());     // 7
console.log("Decrement:", counter.decrement());     // 6
console.log("Direct access attempt (counter.count):", counter.count); // undefined (Encapsulated!)
