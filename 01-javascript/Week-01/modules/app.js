import {
    calculateSalary,
    calculateTax
} from "./salary.js";

const gross = calculateSalary(60000, 10000);
const tax = calculateTax(gross, 10);

console.log(`Gross: ${gross}`);
console.log(`Tax: ${tax}`);

console.log(`Gross: ${gross}`);
console.log(`Tax: ${tax}`);