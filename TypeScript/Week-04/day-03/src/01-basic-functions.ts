// ==========================================
// 01-basic-functions.ts — Function Parameters and Return Types
// ==========================================

export {};

// 1. Basic typed function: parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

console.log("=== 01-basic-functions ===");
console.log("add(10, 20):", add(10, 20)); // 30

// 2. Practice: Calculate Employee's Annual Salary
function calculateAnnualSalary(monthlySalary: number): number {
    return monthlySalary * 12;
}

console.log("Annual Salary for ₹50,000/mo:", `₹${calculateAnnualSalary(50000)}`);

// 3. Practice: Calculate Bonus
function calculateBonus(salary: number, bonusPercentage: number): number {
    return (salary * bonusPercentage) / 100;
}

console.log("15% Bonus on ₹60,000:", `₹${calculateBonus(60000, 15)}`);

// 4. Practice: Build Full Name
function buildFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

console.log("Full Name:", buildFullName("Rahul", "Sharma"));
