// Exercise 1: Basic Callback
console.log("--- Exercise 1: Basic Callback ---");
function greet(name, callback) {
    callback(name);
}

// Call it with our own callback
greet("Aditya", (name) => {
    console.log(`Hello, ${name}! Welcome to callbacks.`);
});

// Exercise 2: Math Callback
console.log("\n--- Exercise 2: Math Callback ---");
function calculate(a, b, callback) {
    // Let's do an addition operation and pass the result
    const sum = a + b;
    callback(sum);
}

// Call calculate with a callback that prints the result
calculate(10, 20, result => {
    console.log(`The result is: ${result}`);
});

// Exercise 3: setTimeout Delay
console.log("\n--- Exercise 3: setTimeout Delay ---");
console.log("Starting a 2-second timer...");
setTimeout(() => {
    console.log("⏰ This delayed message is from Exercise 3 (after 2 seconds)!");
}, 2000);

// Exercise 4: setInterval Countdown
console.log("\n--- Exercise 4: setInterval Countdown ---");
let count = 5;
console.log("Countdown starting...");
const intervalId = setInterval(() => {
    console.log(count);
    count--;
    
    if (count === 0) {
        clearInterval(intervalId); // Stop the interval
        console.log("Countdown finished! Interval cleared.");
    }
}, 1000);

