// 03-generic-arrays.ts
// Generic functions operating on typed arrays and safe element extraction.

// Returns the first item in the array or undefined if the array is empty.
// T | undefined accounts for empty arrays where indexing [0] yields undefined.
function getFirstElement<T>(items: T[]): T | undefined {
    return items[0];
}

// Practice 1: Returns the last element of an array safely
function getLastElement<T>(items: T[]): T | undefined {
    if (items.length === 0) {
        return undefined;
    }
    return items[items.length - 1];
}

// Practice 2: Returns the count of items in an array
function getArrayLength<T>(items: T[]): number {
    return items.length;
}

// Testing with number arrays
const numberList = [10, 20, 30, 40];
const firstNumber = getFirstElement(numberList);
const lastNumber = getLastElement(numberList);
const numberCount = getArrayLength(numberList);

console.log("First number:", firstNumber);
console.log("Last number:", lastNumber);
console.log("Number count:", numberCount);

// Testing with string arrays
const nameList = ["Rahul", "Priya", "Aditya"];
const firstName = getFirstElement(nameList);
const lastName = getLastElement(nameList);

console.log("First name:", firstName?.toUpperCase());
console.log("Last name:", lastName?.toUpperCase());

// Testing with empty arrays: correctly typed as undefined without runtime exceptions
const emptyList: string[] = [];
const missingElement = getFirstElement(emptyList);
console.log("Empty array first element:", missingElement); // undefined

// Testing with custom object types
interface Project {
    id: number;
    title: string;
}

const projects: Project[] = [
    { id: 1, title: "Auth Service" },
    { id: 2, title: "Billing Pipeline" }
];

const firstProject = getFirstElement(projects);
console.log("First project:", firstProject ? firstProject.title : "None");

export { getFirstElement, getLastElement, getArrayLength };
