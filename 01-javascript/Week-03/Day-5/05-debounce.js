function debounce(callback, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

function searchEmployees(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchEmployees, 400);

console.log("Simulating rapid keystrokes: 'A' -> 'Ad' -> 'Adi' -> 'Aditya'...");

debouncedSearch("A");
debouncedSearch("Ad");
debouncedSearch("Adi");
debouncedSearch("Aditya");

