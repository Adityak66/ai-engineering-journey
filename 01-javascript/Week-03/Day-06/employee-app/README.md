# 🏢 WorkForce Pro — Modern JavaScript Employee Management Web App

> **Week 3, Day 6 Consolidation Project**  
> A modular, production-style Employee Management Application built from scratch using pure ES6+ JavaScript, native DOM manipulation, Event Delegation, LocalStorage, and REST API integration.

---

## 🚀 Key Features (12 / 12 Implemented)

- [x] **1. Add Employee**: Full input validation, automatic ID assignment, and instantaneous state synchronization.
- [x] **2. Delete Employee**: Pure immutable deletion using `.filter()`.
- [x] **3. Edit Employee**: Seamless edit mode toggling with automatic form pre-fill and immutable updates via `.map()` and spread syntax (`...`).
- [x] **4. Debounced Search**: Live search across Name, Department, and City with a 400ms debounce buffer to eliminate performance stutter.
- [x] **5. Department Filter**: Dynamically populated filter dropdown using `Set` to extract unique department names automatically.
- [x] **6. Sort by Salary / Name**: Instant client-side sorting (Ascending, Descending, A-Z) without mutating original records.
- [x] **7. Real-Time Metrics**: Live computation of Total Employees, Average Salary, Highest Salary, and Total Monthly Payroll using `.reduce()`.
- [x] **8. Persistent Storage**: Robust `localStorage` read/write layer with JSON serialization and nullish fallbacks (`?? []`).
- [x] **9. Remote REST API Integration**: Fetches remote users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and maps them into our domain schema.
- [x] **10. Loading & Error States**: Real-time visual feedback banners for pending API calls, validation errors, and success notifications.
- [x] **11. Event Delegation**: A single click listener attached to `<tbody>` handles all dynamic edit and delete operations through event bubbling.
- [x] **12. Modular ES6 Architecture**: Strict separation of concerns across dedicated modules with native `import`/`export`.

---

## 📁 Project Architecture

```
employee-app/
├── index.html              # Semantic HTML5 layout & responsive UI components
├── styles.css              # Custom CSS design system with CSS variables & flex/grid
├── package.json            # Module manifest & utility test scripts
├── README.md               # Project documentation & testing guide
└── src/
    ├── app.js              # Central controller, state management, and DOM event bindings
    ├── api.js              # Fetch requests to JSONPlaceholder with error handling
    ├── storage.js          # LocalStorage persistence & JSON serialization
    ├── employeeService.js  # Pure business logic (add, delete, update, stats, filter, sort)
    └── utils.js            # Debounce, throttle, currency formatter, Set/Map helpers
```

---

## 🧠 Modern JavaScript Concepts Demonstrated

| Feature / Concept | Where Used | Purpose |
| :--- | :--- | :--- |
| **ES6 Modules** | `import` / `export` across all files | Clean separation of business logic, persistence, and UI |
| **Event Delegation** | `employeeList.addEventListener("click", ...)` | Handles clicks on dynamic Edit/Delete buttons with 1 listener |
| **Debounce** | `debounce(fn, 400)` in `src/utils.js` | Prevents filter spamming while typing in the search bar |
| **Set** | `getUniqueDepartments()` in `src/utils.js` | Extracts distinct department options for the filter dropdown |
| **Map** | `createEmployeeMap()` in `src/utils.js` | Fast $O(1)$ key-value lookup of employees by ID |
| **Optional Chaining (`?.`)** | `user?.address?.city` in `src/api.js` | Prevents runtime `TypeError` on missing nested data |
| **Nullish Coalescing (`??`)** | `salary ?? 0`, `city ?? "Remote"` | Provides reliable defaults while preserving valid falsy values like `0` |
| **Spread & Immutability** | `[...employees, newEmp]`, `{ ...emp, ...changes }` | Updates state immutably (preparing for React state workflows) |
| **Array Methods** | `filter()`, `map()`, `reduce()`, `find()`, `sort()` | Comprehensive data transformations across the app |

---

## 🛠️ How to Run the Application

Because native ES6 modules (`import`/`export`) in web browsers enforce CORS security policies, `index.html` should be served via an HTTP server rather than the `file://` protocol.

### Option 1: Using `npx serve` (Recommended)
Open a terminal inside the project directory:
```bash
cd d:\Development\ai-engineering-journey\01-javascript\Week-03\Day-06\employee-app
npx serve .
```
Then open the local URL (e.g. `http://localhost:3000`) in your browser.

### Option 2: Using VS Code Live Server
1. Open the project in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Run the Utilities Self-Test in Terminal
Verify all modern JavaScript patterns directly in Node.js:
```bash
node src/utils.js
```

---

## 🧪 Testing Checklist

- [x] **Add**: Enter details $\rightarrow$ click "Add Employee" $\rightarrow$ Row immediately appears and metrics update.
- [x] **Edit**: Click "Edit" $\rightarrow$ Form switches to Edit Mode with yellow badge and fills inputs $\rightarrow$ Make change $\rightarrow$ Click "Save Changes" $\rightarrow$ Row updates in place.
- [x] **Delete**: Click "Delete" on any row $\rightarrow$ Row disappears $\rightarrow$ Metrics recalculate automatically.
- [x] **Debounced Search**: Rapidly type a name in the search bar $\rightarrow$ Indicator shows "Typing..." $\rightarrow$ 400ms after you stop, results filter with zero lag.
- [x] **Department Filter**: Pick a department $\rightarrow$ Only members of that department show. Add an employee in a new department $\rightarrow$ Dropdown automatically adds the new department via `Set`!
- [x] **Sort**: Toggle Salary High $\rightarrow$ Low or Name A $\rightarrow$ Z $\rightarrow$ Table orders instantly.
- [x] **Persistence**: Refresh browser $\rightarrow$ All added, edited, or deleted records remain intact from `localStorage`.
- [x] **Remote API**: Click "Load Remote API Data" $\rightarrow$ Shows loading indicator $\rightarrow$ Merges 10 remote users into the directory without duplicates.
- [x] **Reset Data**: Click "Reset Data" $\rightarrow$ Clears storage and cleans table.
