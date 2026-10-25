// ==========================================
// 02-tuples.ts — Fixed-Length & Typed Position Tuples
// ==========================================

export {};

// 1. Employee Record Tuple: [number (id), string (name), number (salary)]
let employeeRecord: [number, string, number] = [101, "Rahul", 50000];

console.log("=== 02-tuples ===");
console.log("ID:", employeeRecord[0]);
console.log("Name:", employeeRecord[1]);
console.log("Salary:", employeeRecord[2]);

// 2. Product Tuple: [id, name, price]
let productRecord: [number, string, number] = [5001, "Mechanical Keyboard", 4500];
console.log(`Product: ${productRecord[1]} (ID: ${productRecord[0]}) costs ₹${productRecord[2]}`);

// 3. Readonly Tuple: Representing immutable GPS Coordinates [latitude, longitude]
const coordinates: readonly [number, number] = [19.9975, 73.7898];
console.log(`Coordinates: Lat ${coordinates[0]}, Long ${coordinates[1]}`);

// ❌ TypeScript prevents mutating readonly tuples:
// coordinates[0] = 20.0000; // Error: Cannot assign to '0' because it is a read-only property.
