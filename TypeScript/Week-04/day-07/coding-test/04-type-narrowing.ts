// Exercise 4: Type Narrowing using typeof

// Accepts either string or number and narrows the type to invoke appropriate methods
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        // Here TypeScript narrows value to string
        return value.toUpperCase();
    } else {
        // Here TypeScript narrows value to number
        return value.toFixed(2);
    }
}

console.log(formatValue("engineering")); // "ENGINEERING"
console.log(formatValue(45000.5));       // "45000.50"

export { formatValue };
