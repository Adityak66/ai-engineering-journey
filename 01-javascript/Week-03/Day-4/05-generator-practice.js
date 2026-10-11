// 5. Generator Practice: Employee IDs


// Requirement 1 & 2: function* using yield
function* employeeIds() {
    let count = 1;
    
    // We can use a loop with yield to produce values on-demand!
    while (count <= 4) {
        yield `EMP-${count}`;
        count++;
    }
}

console.log("=== 1. Manual next() Calls ===");
// Requirement 3: Call next() several times
const idGen = employeeIds();
console.log(idGen.next().value); // EMP-1
console.log(idGen.next().value); // EMP-2
console.log(idGen.next().value); // EMP-3
console.log(idGen.next().value); // EMP-4
console.log(idGen.next());       // { value: undefined, done: true }


console.log("\n=== 2. Looping with for...of ===");
// Requirement 4: Loop over the generator with for...of
// Because all Generator objects are automatically Iterables,
// they plug directly into modern for...of loops!
const loopGen = employeeIds();

for (const empId of loopGen) {
    console.log("Generated ID:", empId);
}

