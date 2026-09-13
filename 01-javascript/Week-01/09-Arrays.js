const numbers = [10, 20, 30, 40, 50];

//  print first element
console.log("first element :", numbers[0]);

// print last element
console.log("last element :", numbers[4]);

console.log("last element :", numbers[numbers.length - 1]);

// find the length of the array
console.log("Length of array :", numbers.length);

//change the value of an element
numbers[2] = 60;
console.log("Updated array :", numbers);

// add an element at the end of the array
numbers.push(70);
console.log("Array after push :", numbers);

// remove the last element from the array
numbers.pop();
console.log("array after pop :", numbers);

// add an element at the beginning of the array
numbers.unshift(5);
console.log("array after unshift :", numbers);

// remove the first element from the array
numbers.shift();
console.log("array after shift :", numbers);

// extract a portion of the array using slice eg. (20, 60, 40)
const extracted = numbers.slice(1, 4); // start → included, end → NOT included
console.log("extracted portion of array :", extracted);

// Remove elements using splice
numbers.splice(1,2); // start index, number of elements to remove
console.log("array after splice :", numbers);

