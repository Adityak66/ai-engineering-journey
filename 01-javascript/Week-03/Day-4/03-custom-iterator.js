// 3. Custom Iterator

// We can build our own iterator from scratch without relying on any Array!

function createNumberIterator() {
    let number = 1;

    // The Iterator must return an object with a .next() method
    return {
        next() {
            if (number <= 3) {
                return {
                    value: number++,
                    done: false
                };
            }

            // Once finished, done becomes true and value is undefined
            return {
                value: undefined,
                done: true
            };
        }
    };
}

const iterator = createNumberIterator();

console.log("=== Custom Iterator Stepping ===");
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/*
    🧠 THE CRITICAL DIFFERENCE:
    
    1. Iterable: 
       The DATA SOURCE (like a Book). 
       It has a [Symbol.iterator]() method that produces an iterator.
       
    2. Iterator: 
       The BOOKMARK / READER. 
       An object with a .next() method that tracks the current position 
       and tells you what's on the next page ({ value, done }).
*/

