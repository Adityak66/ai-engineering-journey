// Sample Data for the exercises
const numbers = [10, 25, 55, 70, 42, 90, 15];
const names = ['alice', 'bob', 'charlie', 'diana'];

const employees = [
  { id: 1, name: 'Alice', department: 'HR', salary: 45000 },
  { id: 2, name: 'Bob', department: 'IT', salary: 60000 },
  { id: 3, name: 'Charlie', department: 'Finance', salary: 85000 },
  { id: 4, name: 'Diana', department: 'IT', salary: 110000 },
  { id: 5, name: 'Evan', department: 'Operations', salary: 30000 }
];

console.log("--- Initial Data ---");
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Employees:", employees);
console.log("--------------------\n");

// 1. Double every number using map()
const doubledNumbers = numbers.map(num => num * 2);
console.log('1. Doubled Numbers:', doubledNumbers);

// 2. Convert names to uppercase
const upperCaseNames = names.map(name => name.toUpperCase());
console.log('2. Uppercase Names:', upperCaseNames);

// 3. Filter numbers > 50
const overFifty = numbers.filter(num => num > 50);
console.log('3. Numbers > 50:', overFifty);

// 4. Filter employees with salary > 50,000
const highEarners = employees.filter(emp => emp.salary > 50000);
console.log('4. Employees Salary > 50,000:', highEarners);

// 5. Find first employee in IT
const firstITEmployee = employees.find(emp => emp.department === 'IT');
console.log('5. First IT Employee:', firstITEmployee);

// 6. Find employee index (e.g., finding the index of 'Charlie')
const charlieIndex = employees.findIndex(emp => emp.name === 'Charlie');
console.log('6. Index of Charlie:', charlieIndex);

// 7. Calculate total salary
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log('7. Total Salary:', totalSalary);

// 8. Calculate average salary
const averageSalary = totalSalary / employees.length;
console.log('8. Average Salary:', averageSalary);

// 9. Check if anyone earns > 100,000
const hasHighEarner = employees.some(emp => emp.salary > 100000);
console.log('9. Anyone earns > 100,000?', hasHighEarner);

// 10. Check if everyone earns > 20,000
const allEarnAbove20k = employees.every(emp => emp.salary > 20000);
console.log('10. Everyone earns > 20,000?', allEarnAbove20k);

