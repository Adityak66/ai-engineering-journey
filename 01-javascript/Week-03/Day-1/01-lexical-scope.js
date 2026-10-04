
// 1. Lexical Scope

// Lexical scope means that a variable's scope is determined by its physical location 
// in the source code. Inner functions can access variables from their parent functions!

let globalValue = "Global Context: Accessible anywhere!";

function outerFunction() {
    let outerValue = "Outer Context: Accessible inside outerFunction and innerFunction!";
    
    function innerFunction() {
        let innerValue = "Inner Context: Accessible ONLY inside innerFunction!";
        
        // Lexical Scoping in action: 
        // innerFunction can freely reach "out" to read outerValue and globalValue
        console.log(globalValue);
        console.log(outerValue);
        console.log(innerValue);
    }
    
    innerFunction();
}

console.log("=== Running Lexical Scope Example ===");
outerFunction();

// EXPERIMENT:
// If you uncomment the lines below, Node will crash with a ReferenceError.
// Why? Because scope only flows INSIDE OUT, never outside in! 
// The global scope cannot peer inside outerFunction to see its variables.

// console.log(outerValue); 
// console.log(innerValue); 
