// Exercise 2: Typed Functions with Parameter and Return Type Annotations

// Calculates total salary by summing base salary and bonus
function calculateSalary(salary: number, bonus: number = 0): number {
    return salary + bonus;
}

// Example usage
const baseSalary = 60000;
const performanceBonus = 8500;

const total = calculateSalary(baseSalary, performanceBonus);
const totalWithoutBonus = calculateSalary(baseSalary);

console.log("Total compensation with bonus:", total);
console.log("Total compensation base only:", totalWithoutBonus);

export { calculateSalary };
