// 4. Generator Basics

// A generator function is declared with `function*`.
// Instead of running start-to-finish and using `return`,
// it can PAUSE its execution mid-flight using the `yield` keyword!

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

// ⚠️ IMPORTANT: Calling numbers() DOES NOT run the code inside it!
// It creates and returns a "Generator Object" (which is an Iterator).
const generator = numbers();

console.log("=== Stepping through Generator ===");
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

