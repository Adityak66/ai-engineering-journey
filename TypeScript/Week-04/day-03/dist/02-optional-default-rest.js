"use strict";
// ==========================================
// 02-optional-default-rest.ts — Optional, Default, and Rest Parameters
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Optional parameter with '?' (undefined if omitted)
function greet(name, city) {
    return city ? `Hello ${name} from ${city}` : `Hello ${name}`;
}
console.log("=== 02-optional-default-rest ===");
console.log(greet("Rahul"));
console.log(greet("Rahul", "Nashik"));
// 2. Default parameter: assigns a fallback value when argument is omitted
function calculateBonus(salary, percentage = 10) {
    return (salary * percentage) / 100;
}
console.log("Default 10% bonus on ₹50,000:", calculateBonus(50000)); // 5000
console.log("Custom 20% bonus on ₹50,000:", calculateBonus(50000, 20)); // 10000
// 3. Rest parameters: captures arbitrary number of arguments into a typed array
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("sumNumbers(10, 20, 30):", sumNumbers(10, 20, 30)); // 60
console.log("sumNumbers(5, 15, 25, 35, 45):", sumNumbers(5, 15, 25, 35, 45)); // 125
// 4. Return type inference: TypeScript automatically infers 'number'
function multiply(a, b) {
    return a * b; // Inferred as number
}
const product = multiply(5, 4);
console.log("multiply(5, 4) inferred:", product);
