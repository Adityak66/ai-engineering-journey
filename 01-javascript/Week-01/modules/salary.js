export function calculateSalary(salary, bonus = 0) {
    return salary + bonus;
}

export function calculateTax(salary, taxRate) {
    return salary * (taxRate / 100);
}

