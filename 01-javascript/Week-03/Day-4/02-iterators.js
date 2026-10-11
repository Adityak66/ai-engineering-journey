// 2. The Iterator Protocol

// An "Iterator" is an object that provides a .next() method.
// Every call to .next() returns an object with:
// 1. value: The current element
// 2. done: A boolean telling us if the sequence is finished

const numbers = [10, 20, 30];

// We manually retrieve the Iterator from the Iterable array using its Symbol
const iterator = numbers[Symbol.iterator]();

console.log("=== Stepping through the Iterator manually ===");
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/*
    THIS is what `for...of` actually does behind the curtain:
    It calls .next() on every tick of the loop, stops as soon as done === true,
    and yields the `value` directly to your variable!
*/

