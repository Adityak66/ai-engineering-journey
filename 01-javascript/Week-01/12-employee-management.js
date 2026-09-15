const employees = [
    {
        id: 1,
        name: "John",
        department: "IT",
        salary: 50000
    },
    {
        id: 2,
        name: "Sarah",
        department: "HR",
        salary: 45000
    },
    {
        id: 3,
        name: "Mike",
        department: "IT",
        salary: 70000
    },
    {
        id: 4,
        name: "Emma",
        department: "Finance",
        salary: 60000
    }
];


// 1. Total Employees
console.log(`Total Employees : ${employees.length}\n`);

// 2. IT Employees 
// filter() and optional chaining (?.)
console.log("IT Employees:");
const itEmployees = employees.filter(emp => emp?.department === "IT");
// map() and object property access
itEmployees.map(emp => emp.name).forEach(name => console.log(name));
console.log("");

// 3. Highest Salary 
// reduce() and nullish coalescing (??)
const maxSalary = employees.reduce((max, emp) => Math.max(max, emp?.salary ?? 0), 0);
// find()
const topEarner = employees.find(emp => emp.salary === maxSalary);

console.log("Highest Salary:");
console.log(`${topEarner.name} - ₹${topEarner.salary.toLocaleString()}\n`);

// 4. Average Salary
const totalSalary = employees.reduce((sum, emp) => sum + (emp?.salary ?? 0), 0);
const averageSalary = totalSalary / employees.length;

console.log("Average Salary:");
console.log(`₹${averageSalary.toLocaleString()}\n`);

// 5. After 10% Salary Increase
console.log("After 10% Salary Increase:");

// map() used to return transformed objects
const increasedEmployees = employees.map(emp => ({
    name: emp.name,
    newSalary: (emp?.salary ?? 0) * 1.10
}));

// Object.values() used to extract the object values iteratively
increasedEmployees.forEach(empObj => {
    const [name, newSalary] = Object.values(empObj); 
    console.log(`${name.padEnd(5)} -> ₹${newSalary.toLocaleString()}`);
});
