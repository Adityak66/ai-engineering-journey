// Synchronous JavaScript

// Synchronous code executes in sequence.

console.log("A");
console.log("B");
console.log("C");



// Asynchronous JavaScript
console.log("A");

setTimeout(() => {
    console.log("B")
}, 2000);

console.log("c");


// Asynchronous Example
console.log("1");

setTimeout(() => {
    console.log("2");
}, 3000);

setTimeout(() => {
    console.log("3");
}, 1000);

console.log("4");