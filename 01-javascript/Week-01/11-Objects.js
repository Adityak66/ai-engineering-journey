// create an object
const employee = {
    id: 1,
    name: "Aditya",
    department: "IT",
    salary: 60000
};

// Accessing object properties
// Using dot notation
console.log("Employee Name:", employee.name);

// Using bracket notation
console.log("Employee Name:", employee["name"]);

// add a new property to the object
employee.email = "aditya123@gmail.com";
console.log("Employee Email:", employee.email);

console.log("Updated Employee Object:", employee);

// update an existing property
employee.salary = 70000;
console.log("Updated Employee Salary:", employee.salary);

// delete a property from the object
delete employee.department;
console.log("Employee Object after deleting department:", employee);

// methods in objects
const person = {
    name: "Aditya",
    age: 23,
    greet: function(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

person.greet(); // calling the method

// Nested objects
const employeeDetails = {
    id: 1,
    name: "Aditya",

    address: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    }
}

console.log("Employee City:", employeeDetails.address.city);

// Array of objects
const employeesList = [
    { id: 1, name: "Aditya", department: "IT", salary: 60000 },
    { id: 2, name: "Riya", department: "HR", salary: 50000 },
    { id: 3, name: "Karan", department: "Finance", salary: 70000 }
];

console.log("Employees List:", employeesList);
console.log("First Employee Name:", employeesList[0].name);

// Object destructuring
const { id, name, salary } = employeesList[0];
console.log("Destructured Employee Details:", id, name, salary);

// Object.keys() and Object.values()
const employee1 = {
    name: "Aditya",
    age: 22,
    role: "Developer"
}; 

console.log("Employee Keys:", Object.keys(employee1));
console.log("Employee Values:", Object.values(employee1));

// Object.entries()
console.log("Employee Entries:", Object.entries(employee1));


// Object.freeze() and Object.seal()
const employee2 = {
    name: "Aditya",
    age: 22,
    role: "Developer"
};

Object.freeze(employee2); // freeze the object
employee2.age = 23; 
console.log("After trying to change age (frozen):", employee2.age); // age will not change

const employee3 = {age: 22, role: "Developer"};
Object.seal(employee3); // seal the object
employee3.age = 23;
console.log("After changing age (sealed):", employee3.age); // age will change
delete employee3.role;
console.log("After trying to delete role (sealed):", employee3.role); // role will not be deleted

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log("Target after Object.assign():", returnedTarget); // { a: 1, b: 4, c: 5 }

// Optional chaining
const employee = {
    name: "Aditya"
};

console.log("Employee City:",employee.address.city); // this will throw an error because address is undefined
console.log("Employee City:", employee.address?.city); // this will log undefined without throwing an error

// nested optional chaining
const employee = {
    name: "Aditya",
    address: {
        city: "Mumbai"
    }
};

console.log(employee?.address?.city);

// nullish Coalescing ??
const city = employee?.address?.city ?? "Unknown";

console.log(city);

