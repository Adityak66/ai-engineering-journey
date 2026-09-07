// conditional statements

// if statement

let mode = "dark";
let color;

if (mode === "dark"){
    color = "black";
}

if (mode === "light"){
    color = 'white';
}

console.log(color);

// if-else statement

if (mode === "dark"){
    color = "black";
} else {
    color = "white";
}

console.log(color);

// odd or even number

let number = 8;

if (number % 2 === 0){
    console.log("number is even")
} else {
    console.log("number is odd")
}

// if-else-if statement

let marks = 85;

if (marks >= 90){
    console.log("Grade: A");
} else if (marks >= 80){
    console.log("Grade: B");
} else if (marks >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// ternary operator

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No"; // condition ? value_if_true : value_if_false
console.log("Can vote:", canVote);

// switch statement

let day = "wednesday";
let dayName;

switch (day) {
    case "monday":
        dayName = "Monday";
        break;
    case "tuesday":
        dayName = "Tuesday";
        break;
    case "wednesday":
        dayName = "Wednesday";
        break;
    case "thursday":
        dayName = "Thursday";
        break;
    case "friday":
        dayName = "Friday";
        break;
    case "saturday":
        dayName = "Saturday";
        break;
    case "sunday":
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day Name:", dayName);
