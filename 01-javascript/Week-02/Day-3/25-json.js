const employee = {
    name: "Aditya",
    age: 22,
    role: ".NET Developer",
    skills: ["C#", "JavaScript", "SQL"]
};

// Convert the JavaScript Object to a JSON String
const json = JSON.stringify(employee);

console.log("--- JSON String ---");
console.log(json);

// Parse the JSON String back into a JavaScript Object
const original = JSON.parse(json);

console.log("\n--- Parsed Object Properties ---");
console.log(original.name);
console.log(original.skills);

console.log("\n--- Types ---");
console.log(typeof employee); // Should be 'object'
console.log(typeof json);     // Should be 'string'
console.log(typeof original); // Should be 'object'
