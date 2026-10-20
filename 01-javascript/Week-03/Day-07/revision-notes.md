# 📚 Week 3 — Day 7: Full JavaScript Revision Notes & Scorecard

## 🎯 Self-Revision Scorecard

> **Scoring Rubric**:  
> • **2 points**: Can explain concept clearly and write working code without referencing notes.  
> • **1 point**: Understands core principle but needs occasional syntax reference.  
> • **0 points**: Needs re-study before proceeding to React.

| Concept Group | Specific Topics | Self Score (0-2) | Status / Notes |
| :--- | :--- | :---: | :--- |
| **1. Fundamentals** | `let`/`const`, Data Types, Scope Chain, Arrow Functions | **2 / 2** | Strong grasp of block scope vs lexical scope. |
| **2. Functions & Objects** | Closures, `this`, `.call()`, `.apply()`, `.bind()` | **2 / 2** | Call-site binding vs explicit binding mastered. |
| **3. Object-Oriented JS** | Prototypes, Prototype Chain, ES6 Classes, `super()` | **2 / 2** | Understands classes are syntactic sugar over prototypes. |
| **4. Asynchronous JS** | Promises, `async`/`await`, Event Loop, Microtasks | **2 / 2** | Mental model: Network error $\rightarrow$ `catch()`, HTTP 404 $\rightarrow$ `!response.ok`. |
| **5. Browser & Events** | Event Bubbling, Capturing, Delegation, Debounce, Throttle | **2 / 2** | Single parent listener for dynamic elements verified. |
| **6. Modern JavaScript** | ES Modules, Iterators, Generators, `Set`, `Map`, `?.`, `??` | **2 / 2** | Immutable updates with spread syntax ready for React. |

**Total Score: 12 / 12** ✅ Ready for React & AI Engineering workflows!

---

## 🧠 Group-by-Group Concept Syntheses

### Group 1: Fundamentals & Scope
- **Lexical Scope**: Scope is determined at compile-time by where functions are written in the physical code.
- **Scope Chain**: JavaScript resolves identifiers from inside out: Local Scope $\rightarrow$ Parent Outer Scope $\rightarrow$ Global Scope.
- **Variable Shadowing**: If an inner scope re-declares an identical variable name, the inner variable shadows the outer one.
- **Arrow Functions**: Do NOT bind their own `this`, `arguments`, or `prototype`. They capture `this` lexically from the enclosing execution context.

---

### Group 2: Functions, Closures & `this`
- **Closure**: A function bundled together with references to its surrounding lexical state. Even after the outer function finishes executing and pops off the call stack, the inner function retains access to those closed-over variables.
  - *Practical Use*: Private state, data encapsulation (e.g. `createCounter()`, `createBankAccount()`).
- **The `this` Keyword**:
  - Regular functions: `this` is bound at runtime based on **HOW** the function is invoked (call site).
  - Object method (`user.greet()`): `this` points to `user`.
  - Standalone call (`fn()`): `this` is `window` (browsers) or `global` (Node) in non-strict mode; `undefined` in strict mode.
- **Explicit Binding**:
  - `fn.call(context, arg1, arg2)`: Executes immediately; comma-separated arguments.
  - `fn.apply(context, [arg1, arg2])`: Executes immediately; array of arguments.
  - `fn.bind(context)`: Does **not** execute immediately; returns a brand new function with `this` permanently bound.

---

### Group 3: Object-Oriented JavaScript & Prototypes
- **Prototypes**: Every JavaScript object has an internal `[[Prototype]]` link pointing to another object (accessible via `Object.getPrototypeOf(obj)` or `__proto__`).
- **Prototype Chain**: When accessing a property, JS checks the object itself; if missing, it climbs the chain until it finds it or hits `null`.
- **Memory Efficiency**: Attaching methods to `Constructor.prototype` shares **one** function reference across all instances rather than recreating duplicates in memory.
- **ES6 Classes**: Syntactic sugar over prototype inheritance.
  - `extends`: Physically sets up prototype delegation (`ChildClass.prototype.__proto__ = ParentClass.prototype`).
  - `super()`: Invokes the parent constructor; **must** be called before accessing `this` inside derived classes.

---

### Group 4: Asynchronous JavaScript & Event Loop
- **Event Loop Architecture**:
  - **Call Stack**: Executes synchronous JavaScript instructions (LIFO).
  - **Web APIs / Node APIs**: Offloads asynchronous operations (timers, `fetch`, file I/O).
  - **Microtask Queue**: Promises (`.then`, `await`), `queueMicrotask` (executed immediately after current stack empties, *before* render/macrotasks).
  - **Macrotask Queue**: `setTimeout`, `setInterval`, DOM events.
- **Promises**: Objects representing the eventual completion (fulfillment or rejection) of an asynchronous operation.
  - States: `pending` $\rightarrow$ `fulfilled` or `rejected`.
- **Fetch Error Handling Pattern**:
  ```javascript
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP Error ${res.status}`); // Catches 404/500
  const data = await res.json();
  ```

---

### Group 5: Browser Concepts, DOM & Performance Timing
- **Event Bubbling & Capturing**:
  - Phase 1 (Capturing): Root $\rightarrow$ Target (`addEventListener(type, fn, true)`).
  - Phase 2 (Target): Element itself.
  - Phase 3 (Bubbling): Target $\rightarrow$ Root (default, `false`).
- **Event Delegation**: Attaching a single event listener to a common ancestor instead of multiple child listeners. Leverages bubbling and `event.target.closest()`.
- **Debounce vs. Throttle**:
  - **Debounce**: *"Wait until events stop."* Resets timer on every call (search inputs, autosave).
  - **Throttle**: *"Limit execution frequency."* Guarantees execution at most once every $N$ ms (scrolling, window resizing).

---

### Group 6: Modern JavaScript & ES6+ Patterns
- **Set**: Collection of strictly unique values. Ideal for deduplicating arrays: `[...new Set(array)]`.
- **Map**: Key-value pairs where keys can be of any data type (objects, numbers, functions). Fast $O(1)$ lookups.
- **Optional Chaining (`?.`)**: Short-circuits with `undefined` instead of throwing `TypeError` if reference is nullish.
- **Nullish Coalescing (`??`)**: Returns right-hand operand only when left is `null` or `undefined` (preserves `0`, `false`, `""`).
- **Immutable State Updates**: Using spread syntax `[...arr, item]` and `arr.map(e => e.id === id ? { ...e, ...changes } : e)` to avoid mutating existing references.
- **Generators (`function*` & `yield`)**: Pausable functions that implement both Iterable and Iterator protocols.
