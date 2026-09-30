console.log("JavaScript Loaded! Let's play with LocalStorage.");


// 1. Basic Strings

console.log("\n--- 1. Basic String Storage ---");

// Save to storage
localStorage.setItem("name", "Aditya");
console.log("Saved string to localStorage: 'Aditya'");

// Read from storage
const savedName = localStorage.getItem("name");
console.log("Retrieved string:", savedName);

// Remove from storage
localStorage.removeItem("name");
console.log("Removed 'name' from localStorage.");


// 2. Objects in localStorage (JSON)

console.log("\n--- 2. Object Storage ---");

const employee = {
    name: "Aditya",
    role: "Developer",
    salary: 60000
};

// Because localStorage ONLY accepts strings, we MUST stringify objects
localStorage.setItem("employee", JSON.stringify(employee));
console.log("Saved Object as JSON string to localStorage.");

// Read the string back out
const rawString = localStorage.getItem("employee");

// Convert the string back into a real JavaScript Object
if (rawString) {
    const parsedEmployee = JSON.parse(rawString);
    console.log("📥 Retrieved and Parsed Object:");
    console.log(parsedEmployee);
    console.log("Accessing specific property:", parsedEmployee.role);
}


// 3. Arrays in localStorage (The || [] trick)

console.log("\n--- 3. Array Storage ---");

const employeeList = ["John", "Sarah", "Mike"];

// Same rule applies to arrays: MUST stringify
localStorage.setItem("employeesList", JSON.stringify(employeeList));
console.log("Saved Array as JSON string to localStorage.");

// INTERVIEW TIP 
// Using `|| []` guarantees that if localStorage is empty (null), 
// JavaScript safely falls back to an empty array instead of crashing when you try to loop over it later!
const savedEmployees = JSON.parse(localStorage.getItem("employeesList")) || [];

console.log("Retrieved and Parsed Array:", savedEmployees);


// 4. clear()

// If we run clear() right now, it would wipe everything before you could look at it in the Application tab!
// Try running `localStorage.clear()` in your browser console manually to see everything vanish.

console.log("\nCheck your browser's Application -> Local Storage tab to see the saved Object and Array persisting!");
