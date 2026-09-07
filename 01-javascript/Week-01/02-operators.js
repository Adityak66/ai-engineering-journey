// Arithmetic Operators (+, -, *, /, %, **)

let  a = 20;
let b = 3;

// Addition
let sum = a + b;
console.log("Sum:", sum);

// Subtraction
let difference = a - b;
console.log("Difference:", difference);

// Multiplication
let product = a * b;
console.log("Product:", product);

// Division
let quotient = a / b;
console.log("Quotient:", quotient);

// Modulus
let remainder = a % b;
console.log("Remainder:", remainder);

// Exponentiation
let power = a ** b;
console.log("Power:", power);

// Unary Operators (++, --)

let c = 5;
let d = 2;

console.log("c = ", c, "d = ", d);
console.log("c --", c--); // Postfix decrement
console.log("c = ", c);

console.log("d ++", d++); // Postfix increment
console.log("d = ", d);

console.log("--c", --c); // Prefix decrement

console.log("++d", ++d); // Prefix increment


// Assignment Operators (=, +=, -=, *=, /=, %=, **=)

let score = 50;
score += 10; // Increment score by 10 (score = score + 10)
score -= 5;  // Decrement score by 5 (score = score - 5)
score *= 2;  // Multiply score by 2 (score = score * 2)
score /= 4;  // Divide score by 4 (score = score / 4)
score %= 3;  // Get remainder of score divided by 3 (score = score % 3)
score **= 2; // Raise score to the power of 2 (score = score ** 2)

console.log("Updated Score:", score);

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)

console.log(5 == 5) // true
console.log(5 === '5') // false
console.log(5 != 10) // true
console.log(5 !== '5') // true
console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 >= 10) // true
console.log(10 <= 9) // false
console.log(false == 0) // true
console.log(false === 0) // false

// Logical Operators (logical &&, logical ||, logical !)
let x = 5;
let y = 10;

let con1 = y > x;
let con2 = y === 10;

console.log("con1 && con2:", con1 && con2); // both contition should be true to return true
console.log("con1 || con2:", con1 || con2); // only one condition should be true to return true
console.log("!con1:", !con1); // returns the opposite of original result

// ternary operator

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote);

