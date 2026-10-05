// 2. Arrow Function vs Regular Function

const user = {
    name: "Aditya",
    
    // Normal function: 'this' depends on HOW it is called.
    normalFunction() {
        console.log("Normal function this.name:", this.name);
    },
    
    // Arrow function: 'this' is locked to WHERE it was written (Lexical Scope).
    // It completely ignores who called it!
    arrowFunction: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

console.log("=== Comparing Functions ===");
user.normalFunction(); // Expected: "Aditya"
user.arrowFunction();  // Expected: undefined 

// My Own Explanation Example
console.log("\n=== My Own Example ===");

const robot = {
    model: "T-800",
    startNormal: function() {
        console.log("Normal Robot Model:", this.model);
    },
    startArrow: () => {
        console.log("Arrow Robot Model:", this.model);
    }
};

robot.startNormal(); // "T-800"
robot.startArrow(); // undefined

/*
EXPLANATION:
Why did the arrow function fail?
Because arrow functions DO NOT create their own 'this' binding. Instead, they look "up" to the surrounding lexical scope. 
In JavaScript, objects (`const robot = {}`) do NOT create a new scope block. Therefore, the arrow function looks past the object directly into the Global scope. Since there is no 'model' variable in the global scope, it returns undefined!
*/
