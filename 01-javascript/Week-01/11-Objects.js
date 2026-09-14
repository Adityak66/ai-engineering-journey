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
console.log("First Employee Name:", employeesList[1].name);

// Object destructuring
const { id, name, salary } = employeesList[0];
console.log("Destructured Employee Details:", id, name, salary);

//