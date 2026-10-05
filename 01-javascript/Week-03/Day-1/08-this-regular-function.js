// 1. Regular Function and the Call Site

function showThis() {
    // When called standalone in Node.js, 'this' refers to the Global Object.
    // If you run this in a web browser, it would log the 'window' object!
    console.log(this);
}

console.log("=== Standalone Call ===");
// Notice how it dumps a massive global object into your terminal!
showThis();

console.log("\n=== Object Method Call ===");
const user = {
    name: "Aditya",
    // We are assigning the EXACT SAME standalone function to this object property
    show: showThis 
};

// Now look at the output! Because the "call site" is user.show(), 
// 'this' evaluates directly to the 'user' object instead of the global scope.
user.show();
