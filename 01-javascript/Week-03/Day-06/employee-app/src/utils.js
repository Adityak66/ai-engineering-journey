// ============================================================================
// src/utils.js — Modern JavaScript Patterns & Helper Utilities
// ============================================================================

// ----------------------------------------------------------------------------
// 1. REUSABLE TIMING UTILITIES (Debounce & Throttle)
// ----------------------------------------------------------------------------

/**
 * Debounce: Delays execution until 'delay' ms have elapsed since the last call.
 * Essential for live search inputs to prevent spamming filter/API requests.
 */
export function debounce(callback, delay = 400) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

/**
 * Throttle: Limits execution to at most once per 'delay' ms.
 * Useful for scroll, resize, or rapid click actions.
 */
export function throttle(callback, delay = 500) {
    let lastRun = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastRun >= delay) {
            lastRun = now;
            callback.apply(this, args);
        }
    };
}

// ----------------------------------------------------------------------------
// 2. FORMATTING HELPERS
// ----------------------------------------------------------------------------

/**
 * Formats a numeric salary into Indian Rupee currency format (e.g., ₹50,000)
 */
export function formatCurrency(amount) {
    const val = Number(amount) || 0;
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(val);
}

// ----------------------------------------------------------------------------
// 3. SET: UNIQUE DEPARTMENTS
// ----------------------------------------------------------------------------

/**
 * Extracts a unique list of department strings from an array of employees using Set.
 */
export function getUniqueDepartments(employees) {
    const departments = employees.map(emp => emp.department ?? "General");
    return ["All", ...new Set(departments)];
}

// ----------------------------------------------------------------------------
// 4. MAP: EMPLOYEE ID LOOKUP
// ----------------------------------------------------------------------------

/**
 * Creates a Map linking employee ID -> employee object for O(1) lookups.
 */
export function createEmployeeMap(employees) {
    const map = new Map();
    employees.forEach(emp => map.set(emp.id, emp));
    return map;
}

// ----------------------------------------------------------------------------
// 5. OPTIONAL CHAINING & NULLISH COALESCING HELPERS
// ----------------------------------------------------------------------------

/**
 * Safely extracts city from nested objects without throwing TypeError.
 */
export function safeGetCity(user) {
    // Optional chaining (?.) prevents crashes if address is null/undefined
    // Nullish coalescing (??) provides fallback only for null/undefined (preserves empty strings)
    return user?.address?.city ?? "Remote / Not Specified";
}

/**
 * Safely sanitizes employee department.
 */
export function sanitizeDepartment(dept) {
    return dept?.trim() ?? "General";
}

// ============================================================================
// SELF-VERIFYING PRACTICE TEST (Runs when executed directly via Node.js)
// ============================================================================
if (typeof process !== "undefined" && process.argv[1]?.endsWith("utils.js")) {
    console.log("=================================================");
    console.log("🧪 RUNNING MODERN JAVASCRIPT PATTERNS PRACTICE");
    console.log("=================================================\n");

    const employees = [
        { id: 1, name: "Aditya", department: "IT", salary: 50000, profile: { address: { city: "Nashik" } } },
        { id: 2, name: "Rahul", department: "HR", salary: 45000 },
        { id: 3, name: "Sarah", department: "IT", salary: 60000, profile: { address: null } }
    ];

    // --- Array Methods Review ---
    console.log("--- 1. Array Methods ---");
    const itEmployees = employees.filter(e => e.department === "IT");
    console.log("Filter IT:", itEmployees.map(e => e.name)); // ["Aditya", "Sarah"]

    const foundEmp = employees.find(e => e.id === 2);
    console.log("Find ID 2:", foundEmp?.name); // "Rahul"

    const indexSarah = employees.findIndex(e => e.id === 3);
    console.log("Index ID 3:", indexSarah); // 2

    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    const avgSalary = totalSalary / employees.length;
    console.log("Total Salary:", totalSalary, "| Average Salary:", Math.round(avgSalary));

    const salaryRaised = employees.map(e => ({ ...e, salary: Math.round(e.salary * 1.10) }));
    console.log("10% Raise applied (immutable):", salaryRaised.map(e => `${e.name}: ${e.salary}`));

    // --- Set Practice ---
    console.log("\n--- 2. Set (Unique Departments) ---");
    const uniqueDepts = getUniqueDepartments(employees);
    console.log("Unique Departments with Set:", uniqueDepts);

    // --- Map Practice ---
    console.log("\n--- 3. Map (Key-Value Lookup) ---");
    const empMap = createEmployeeMap(employees);
    console.log("Map size:", empMap.size);
    console.log("Map lookup ID 1:", empMap.get(1)?.name);

    // --- Optional Chaining & Nullish Coalescing ---
    console.log("\n--- 4. Optional Chaining (?.) & Nullish Coalescing (??) ---");
    console.log("Aditya's city:", safeGetCity(employees[0].profile)); // Nashik
    console.log("Rahul's city (missing profile):", safeGetCity(employees[1].profile)); // Remote / Not Specified
    console.log("Sarah's city (null address):", safeGetCity(employees[2].profile)); // Remote / Not Specified

    // --- Logical Assignment (??= and ||=) ---
    console.log("\n--- 5. Logical Assignment (??= and ||=) ---");
    let initialBonus = null;
    initialBonus ??= 5000; // Assigns because initialBonus was null
    console.log("initialBonus (??= 5000):", initialBonus);

    let zeroRating = 0;
    zeroRating ||= 5; // Replaces 0 because 0 is falsy!
    console.log("zeroRating (||= 5):", zeroRating); // 5

    let preservedZero = 0;
    preservedZero ??= 5; // Preserves 0 because 0 is NOT nullish!
    console.log("preservedZero (??= 5):", preservedZero); // 0 (Preserved!)

    console.log("\n✅ All Modern JS Patterns verified successfully!\n");
}
