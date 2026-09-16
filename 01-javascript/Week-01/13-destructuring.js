// 1. Destructure 3 numbers
const numbers = [10, 20, 30, 40, 50];
const [num1, num2, num3] = numbers;
console.log("1. Three Numbers:", num1, num2, num3);

// 2. Skip one number
const [first, , third] = numbers; // Skipping the second element
console.log("2. Skip One (First & Third):", first, third);

// 3. Use a default value
const [a, b, c, d, e, f = 100] = numbers; // f doesn't exist in array, defaults to 100
console.log("3. Default Value (f):", f);

// Sample object for next exercises
const employee = {
    name: "Alex",
    department: "Sales",
    salary: 80000,
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

// 4. Destructure employee name + salary
const { name, salary } = employee;
console.log("4. Employee Name & Salary:", name, "-", salary);

// 5. Rename a property
const { name: employeeName, salary: annualSalary } = employee;
console.log("5. Renamed Properties:", employeeName, "-", annualSalary);

// 6. Destructure nested address
const { address: { city, zipcode } } = employee;
console.log("6. Nested Address:", city, zipcode);

// 7. Destructure an array of names
const names = ["John", "Sarah", "Mike", "Emma"];
const [name1, name2, ...restNames] = names;
console.log("7. Array of Names (Destructured first two):", name1, name2);

// 8. Destructure first + second employee
const employeesArray = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" }
];
const [firstEmp, secondEmp] = employeesArray;
console.log("8. First & Second Employee Objects:", firstEmp.name, "&", secondEmp.name);

