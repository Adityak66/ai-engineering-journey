// 1. Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// 2. Celsius → Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Salary Calculator
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

// 4. Discount Calculator
function calculateDiscount(price, percentage) {
    return price - (price * (percentage / 100));
}

// 5. Even Checker
function isEven(number) {
    return number % 2 === 0;
}

// 6. Largest Number
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

// 7. Greeting
function greet(name = "User") {
    return `Hello, ${name}!`;
}

// 8. Sum Any Number of Values
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 9. String Utility
function getNameLength(name) {
    return name.length;
}

// 10. Profile Function
function createProfile(name, age, role) {
    return {
        name: name,
        age: age,
        role: role
    };
}

