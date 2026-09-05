console.log("Hello Aditya!");
console.log("Starting AI Engineering Journey");

// Data Types in JavaScript

let name = "Aditya"; // String
let age = 23; // Number
let isDeveloper = true; // Boolean
let salary;
let value = null; // Null
let id = Symbol("id"); // Symbol

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isDeveloper); // boolean
console.log(typeof salary); // undefined
console.log(typeof value); // object
console.log(typeof id); // symbol


// Day 1 Exercises

// 1. Store your name and age
let myName = 'Aditya';
let myAge = 23;

// 2. calculate age next year
console.log(myAge + 1);

// 3. Celsius to Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// 4. Calculate the area of a rectangle
let length = 10;
let width = 5;
let area = length * width;
console.log(area);

// 5. Salary increase calculator
let currentSalary = 400000;
let increasePersentage = 25;
let newSalary = currentSalary + (currentSalary * increasePersentage / 100);
console.log(newSalary);

// 6. Print all variables types using typeof

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof celsius);
console.log(typeof fahrenheit);
console.log(typeof length);
console.log(typeof width);
console.log(typeof area);
console.log(typeof currentSalary);
console.log(typeof increasePersentage);
console.log(typeof newSalary);

// 7. Swap to variables

// [a, b] = [b, a];

// 8. Convert string to number
let str = "123";
let num = Number(str);
console.log(num);

let str2 = "456.78";
let num2 = parseFloat(str2);
console.log(num2);

let str3 = "789";
let num3 = parseInt(str3);
console.log(num3);  

// 9. Convert number to string 

let number = 350;
let stringNumber = number.toString();
console.log(stringNumber);

let number2 = 123.45;
let stringNumber2 = String(number2);
console.log(stringNumber2);

// 10. Create a profile object 

const profile = {
    name : "Aditya",
    age : 23,
    role : ".NET Developer",
    goal : "AI Engineer",
    city : "Mumbai"
};

console.log(profile);

