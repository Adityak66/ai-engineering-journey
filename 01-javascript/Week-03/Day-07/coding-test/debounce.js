// coding-test/debounce.js — Exercise 6: Debounce Implementation

function debounce(callback, delay = 300) {
    let timerId;

    return function (...args) {
        // Essential: cancel any currently scheduled execution
        clearTimeout(timerId);

        // Schedule new execution after the quiet period
        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

// Verification simulation:
const handleSearch = (term) => {
    console.log(`[Search Dispatched] Term: "${term}" at ${new Date().toISOString()}`);
};

const debouncedSearch = debounce(handleSearch, 200);

console.log("Simulating 4 keystrokes in quick succession...");
debouncedSearch("A");
debouncedSearch("Ad");
debouncedSearch("Adi");
debouncedSearch("Aditya");

console.log("Waiting 300ms for debounce timer to fire...");
setTimeout(() => {
    console.log("Test finished! Only 'Aditya' should have been dispatched above.");
}, 300);
