// 1. Iterables (for...of)

// An "Iterable" is any object that has a [Symbol.iterator] method.
// Both Arrays and Strings have this built-in, which is why `for...of` works on them!

console.log("=== Iterating over an Array ===");
const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}

console.log("\n=== Iterating over a String ===");
const name = "Aditya";

for (const character of name) {
    console.log(character);
}

// Under the hood, for...of automatically calls [Symbol.iterator]() 
// on these items and extracts values until they are exhausted!

