"use strict";
// ==========================================
// 08-final-practice.ts — 10 Final Practice Challenges
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=== 08-final-practice ===");
// 5. Use both number[] and Array<string>
const quarterlyMetrics = [85, 92, 88, 95];
const coreTechnologies = ["TypeScript", "C#", ".NET Core", "React"];
console.log("Metrics (number[]):", quarterlyMetrics);
console.log("Technologies (Array<string>):", coreTechnologies);
// 6. Tuple for employee ID, name, and salary
const employeeSnapshot = [101, "Aditya Sharma", 75000];
console.log(`Tuple snapshot -> ID: ${employeeSnapshot[0]}, Name: ${employeeSnapshot[1]}, Salary: ₹${employeeSnapshot[2]}`);
// Setup Employee dataset for operations 7–10
let team = [
    { id: 101, name: "Aditya", salary: 75000, department: "Engineering", email: "aditya@company.com" },
    { id: 102, name: "Priya", salary: 60000, department: "Design" },
    { id: 103, name: "Rahul", salary: 80000, department: "Engineering", email: "rahul@company.com" },
    { id: 104, name: "Sneha", salary: 55000, department: "HR" }
];
// 7. Find an employee by ID
const found = team.find(member => member.id === 103);
console.log("7. Found by ID (103):", found?.name, `(Email: ${found?.email ?? "None"})`);
// 8. Filter employees by department
const engineers = team.filter(member => member.department === "Engineering");
console.log("8. Engineering team members:", engineers.map(m => m.name).join(", "));
// 9. Calculate total salary with reduce()
const totalTeamPayroll = team.reduce((acc, member) => acc + member.salary, 0);
console.log(`9. Total Department Payroll: ₹${totalTeamPayroll}`);
// 10. Update an employee immutably with map() and spread syntax
const promotedTeam = team.map(member => member.id === 102
    ? { ...member, salary: 68000, department: "Product Design" }
    : member);
console.log("10. Updated Priya (ID 102):", promotedTeam.find(m => m.id === 102));
console.log("Original team unmodified:", team.find(m => m.id === 102));
console.log("\n✅ All 10 challenges completed successfully!");
