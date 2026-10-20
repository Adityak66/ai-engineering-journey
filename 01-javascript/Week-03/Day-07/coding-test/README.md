# 🧪 JavaScript Day 7 Coding Test Suite

This folder contains focused, standalone implementations of the core JavaScript concepts tested during Week 3:

## Files & Concepts

- **`closure.js`**: Demonstrates closures for private state encapsulation (`createCounter()`).
- **`classes.js`**: Demonstrates ES6 Classes, constructor initialization, method inheritance, and method overriding (`super()`).
- **`promises.js`**: Demonstrates Promise resolution, `async`/`await`, and network validation with `fetch()` and `response.ok`.
- **`debounce.js`**: Demonstrates performance timing control using `clearTimeout()` and `setTimeout()`.
- **`arrays-map-set.js`**: Demonstrates functional transformations (`filter`, `map`, `reduce`), array deduplication via `Set`, and $O(1)$ key-value lookups using `Map`.

## Running the Suite

Run all tests via the root runner:
```bash
node ../coding-test.js
```

Or run any module individually:
```bash
node closure.js
node classes.js
node promises.js
node debounce.js
node arrays-map-set.js
```
