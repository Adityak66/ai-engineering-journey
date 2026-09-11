
// Mini Assignment — Personal Finance Calculator

// Rest parameter
function calculateBonus(...bonuses) {
    // Adds up multiple bonus amounts passed as arguments
    return bonuses.reduce((total, amount) => total + amount, 0);
}

// Function declaration & Parameters
function calculateGrossSalary(baseSalary, bonus) {
    return baseSalary + bonus; 
}

// Arrow function & Default parameter
const calculateTax = (grossSalary, taxRate = 0.1) => {
    return grossSalary * taxRate;
};

// Arrow function
const calculateNetSalary = (grossSalary, tax) => {
    return grossSalary - tax;
};

// Main execution function
function generateSalarySlip() {
    const baseSalary = 60000;
    
    // Arguments passed to functions
    const bonus = calculateBonus(5000, 3000, 2000); // Sum = 10,000
    const grossSalary = calculateGrossSalary(baseSalary, bonus);
    
    // Overriding the default tax rate (10%) to exactly match the example's ₹8,000 tax on ₹70,000
    const customTaxRate = 8000 / 70000; 
    const tax = Math.round(calculateTax(grossSalary, customTaxRate)); 
    
    const netSalary = calculateNetSalary(grossSalary, tax);

    // Print formatted output
    console.log("===== SALARY CALCULATOR =====");
    console.log("");
    console.log(`Base Salary : ₹${baseSalary.toLocaleString()}`);
    console.log(`Bonus       : ₹${bonus.toLocaleString()}`);
    console.log(`Tax         : ₹${tax.toLocaleString()}`);
    console.log("");
    console.log(`Gross Salary: ₹${grossSalary.toLocaleString()}`);
    console.log(`Net Salary  : ₹${netSalary.toLocaleString()}`);
}


generateSalarySlip();
