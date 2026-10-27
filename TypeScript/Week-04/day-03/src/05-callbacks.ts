// ==========================================
// 05-callbacks.ts — Typed Callback Signatures
// ==========================================

export {};

// 1. Higher-order function accepting a typed callback
function calculate(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

console.log("=== 05-callbacks ===");

// Passing addition callback
const sum = calculate(10, 5, (x, y) => x + y);
console.log("Addition callback:", sum); // 15

// Passing multiplication callback
const product = calculate(10, 5, (x, y) => x * y);
console.log("Multiplication callback:", product); // 50

// 2. Real-world example: Processing an employee record with a callback
interface Employee {
    id: number;
    name: string;
    salary: number;
}

function processEmployee(
    emp: Employee,
    formatter: (id: number, name: string, netPay: number) => string
): string {
    const netPay = emp.salary * 0.85; // after 15% tax
    return formatter(emp.id, emp.name, netPay);
}

const sampleEmp: Employee = { id: 101, name: "Priya", salary: 60000 };

const payslip = processEmployee(sampleEmp, (id, name, netPay) => {
    return `PaySlip #${id} | ${name} | Net: ₹${netPay}`;
});

console.log("Processed Employee:", payslip);
