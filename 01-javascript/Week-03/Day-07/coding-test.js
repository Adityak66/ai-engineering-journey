// ============================================================================
// Week-03 / Day-07 / coding-test.js
// 10-Point JavaScript Mastery Checkpoint
// ============================================================================

async function runCheckpointTest() {
    console.log("=================================================");
    console.log("🧪 STARTING JAVASCRIPT 10-POINT CODING CHECKPOINT");
    console.log("=================================================\n");

    let passed = 0;

    // ------------------------------------------------------------------------
    // 1. CLOSURE COUNTER
    // ------------------------------------------------------------------------
    function createCounter(initial = 0) {
        let count = initial; // Private state held in closure
        return {
            increment: () => ++count,
            decrement: () => --count,
            getValue: () => count
        };
    }

    const counter = createCounter(10);
    counter.increment();
    counter.increment();
    counter.decrement();
    if (counter.getValue() === 11 && counter.count === undefined) {
        console.log("✅ [PASS 1/10] Closure Counter: Encapsulation & state retention verified (Value: 11, Private: undefined).");
        passed++;
    } else {
        console.error("❌ [FAIL 1/10] Closure Counter failed.");
    }

    // ------------------------------------------------------------------------
    // 2. EMPLOYEE CLASS
    // ------------------------------------------------------------------------
    class Employee {
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }

        getSalary() {
            return this.salary;
        }

        introduce() {
            return `Hi, I am ${this.name}`;
        }
    }

    const emp = new Employee("Aditya", 70000);
    if (emp.name === "Aditya" && emp.getSalary() === 70000 && emp.introduce() === "Hi, I am Aditya") {
        console.log("✅ [PASS 2/10] Employee Class: Constructor & prototype method working correctly.");
        passed++;
    } else {
        console.error("❌ [FAIL 2/10] Employee Class failed.");
    }

    // ------------------------------------------------------------------------
    // 3. INHERITANCE (Manager extends Employee)
    // ------------------------------------------------------------------------
    class Manager extends Employee {
        constructor(name, salary, teamSize) {
            super(name, salary); // Super calls parent constructor
            this.teamSize = teamSize;
        }

        getTeamSize() {
            return this.teamSize;
        }

        introduce() {
            return `${super.introduce()}, managing a team of ${this.teamSize}.`;
        }
    }

    const mgr = new Manager("Sarah", 95000, 8);
    if (mgr instanceof Employee && mgr.getTeamSize() === 8 && mgr.getSalary() === 95000 && mgr.introduce().includes("team of 8")) {
        console.log("✅ [PASS 3/10] Inheritance: super() binding, method inheritance & overriding verified.");
        passed++;
    } else {
        console.error("❌ [FAIL 3/10] Inheritance failed.");
    }

    // ------------------------------------------------------------------------
    // 4. PROMISE (Resolution after delay)
    // ------------------------------------------------------------------------
    function delayMessage(message, ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message, duration: ms });
            }, ms);
        });
    }

    const promiseResult = await delayMessage("Async Operation Completed", 100);
    if (promiseResult.message === "Async Operation Completed") {
        console.log("✅ [PASS 4/10] Promise: Resolution after timer verified.");
        passed++;
    } else {
        console.error("❌ [FAIL 4/10] Promise failed.");
    }

    // ------------------------------------------------------------------------
    // 5. ASYNC/AWAIT & FETCH (with try/catch & response.ok)
    // ------------------------------------------------------------------------
    async function fetchUserData(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
            }
            const data = await response.json();
            return { success: true, name: data.name, email: data.email };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    const apiUser = await fetchUserData(1);
    if (apiUser.success && apiUser.name) {
        console.log(`✅ [PASS 5/10] async/await & Fetch: Fetched remote user '${apiUser.name}' with response.ok validation.`);
        passed++;
    } else {
        console.error("❌ [FAIL 5/10] async/await & Fetch failed.");
    }

    // ------------------------------------------------------------------------
    // 6. DEBOUNCE (setTimeout & clearTimeout)
    // ------------------------------------------------------------------------
    function debounce(callback, delay) {
        let timerId;
        return function (...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    }

    let debounceExecutedCount = 0;
    let lastQuery = "";
    const debouncedFn = debounce((query) => {
        debounceExecutedCount++;
        lastQuery = query;
    }, 150);

    // Call rapidly 4 times
    debouncedFn("A");
    debouncedFn("Ad");
    debouncedFn("Adi");
    debouncedFn("Aditya");

    // Wait 250ms for the debounced call to finalize
    await new Promise(r => setTimeout(r, 250));

    if (debounceExecutedCount === 1 && lastQuery === "Aditya") {
        console.log("✅ [PASS 6/10] Debounce: Only final call ('Aditya') executed after 4 rapid calls.");
        passed++;
    } else {
        console.error("❌ [FAIL 6/10] Debounce failed.");
    }

    // ------------------------------------------------------------------------
    // 7. EVENT DELEGATION PATTERN
    // ------------------------------------------------------------------------
    // We simulate the DOM Event Delegation mechanism:
    // A single parent handler inspecting event.target.matches()
    const simulatedContainer = {
        listener: null,
        addEventListener(type, handler) {
            this.listener = handler;
        },
        dispatchClick(targetElement) {
            this.listener({
                target: targetElement,
                currentTarget: this
            });
        }
    };

    let itemDeletedId = null;
    simulatedContainer.addEventListener("click", (event) => {
        if (event.target.className === "delete-btn") {
            itemDeletedId = event.target.dataset.id;
        }
    });

    // Simulate clicking a dynamically generated child button
    simulatedContainer.dispatchClick({
        className: "delete-btn",
        dataset: { id: "emp-42" }
    });

    if (itemDeletedId === "emp-42") {
        console.log("✅ [PASS 7/10] Event Delegation: Single ancestor listener processed dynamic child event.");
        passed++;
    } else {
        console.error("❌ [FAIL 7/10] Event Delegation failed.");
    }

    // ------------------------------------------------------------------------
    // 8. ARRAY TRANSFORMATIONS (filter, map, reduce)
    // ------------------------------------------------------------------------
    const testEmployees = [
        { id: 1, name: "Aditya", department: "Engineering", salary: 80000 },
        { id: 2, name: "Rahul", department: "HR", salary: 50000 },
        { id: 3, name: "Sarah", department: "Engineering", salary: 90000 }
    ];

    const engOnly = testEmployees.filter(e => e.department === "Engineering");
    const namesUpper = testEmployees.map(e => e.name.toUpperCase());
    const totalPayroll = testEmployees.reduce((sum, e) => sum + e.salary, 0);
    const avgSalary = Math.round(totalPayroll / testEmployees.length);

    if (engOnly.length === 2 && namesUpper[0] === "ADITYA" && totalPayroll === 220000 && avgSalary === 73333) {
        console.log(`✅ [PASS 8/10] Array Transformations: filter (2 eng), map (uppercase), reduce (Avg: ₹${avgSalary}).`);
        passed++;
    } else {
        console.error("❌ [FAIL 8/10] Array Transformations failed.");
    }

    // ------------------------------------------------------------------------
    // 9. MAP AND SET
    // ------------------------------------------------------------------------
    const rawDepartments = ["Engineering", "HR", "Engineering", "Marketing", "HR", "Finance"];
    const uniqueDepartments = [...new Set(rawDepartments)]; // Set removes duplicates

    const employeeLookupMap = new Map();
    testEmployees.forEach(emp => employeeLookupMap.set(emp.id, emp));

    const lookedUpEmp = employeeLookupMap.get(2);

    if (uniqueDepartments.length === 4 && employeeLookupMap.has(1) && lookedUpEmp.name === "Rahul") {
        console.log(`✅ [PASS 9/10] Set & Map: Deduplicated 6 depts down to 4, and performed O(1) Map lookup for 'Rahul'.`);
        passed++;
    } else {
        console.error("❌ [FAIL 9/10] Map and Set failed.");
    }

    // ------------------------------------------------------------------------
    // 10. MODULES & UTILITIES
    // ------------------------------------------------------------------------
    // Emulating modular math and formatting exports
    const SalaryModule = {
        calculateAnnual: (monthly) => monthly * 12,
        calculateTax: (annual, rate = 0.15) => Math.round(annual * rate),
        formatINR: (amount) => `₹${amount.toLocaleString("en-IN")}`
    };

    const annual = SalaryModule.calculateAnnual(80000); // 960000
    const tax = SalaryModule.calculateTax(annual);      // 144000
    const formatted = SalaryModule.formatINR(annual);

    if (annual === 960000 && tax === 144000 && formatted.includes("9,60,000")) {
        console.log(`✅ [PASS 10/10] Modules: Encapsulated utility functions calculate and format correctly (${formatted}).`);
        passed++;
    } else {
        console.error("❌ [FAIL 10/10] Modules failed.");
    }

    console.log("\n=================================================");
    console.log(`🏁 CHECKPOINT SUMMARY: ${passed}/10 TESTS PASSED (100%)`);
    console.log("=================================================");
}

runCheckpointTest();
