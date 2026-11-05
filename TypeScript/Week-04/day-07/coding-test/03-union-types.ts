// Exercise 3: Union Types for Flexible Identifiers

type EmployeeId = number | string;

interface EmployeeRecord {
    id: EmployeeId;
    name: string;
}

// Function accepting either numeric or string employee IDs
function formatEmployeeBadge(id: EmployeeId, employeeName: string): string {
    return `Badge: [${String(id)}] - ${employeeName}`;
}

const emp1 = formatEmployeeBadge(101, "Rahul Sharma");
const emp2 = formatEmployeeBadge("EMP-902", "Priya Patel");

console.log(emp1);
console.log(emp2);

export type { EmployeeId };
export { formatEmployeeBadge };
