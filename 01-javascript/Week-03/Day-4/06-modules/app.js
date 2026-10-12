import createEmployee, {
    employee,
    getEmployeeName as fetchEmployeeName
} from "./employee.js";

import { COMPANY_NAME, TAX_RATE } from "./constants.js";

import {
    calculateAnnualSalary,
    calculateBonus
} from "./salaryUtils.js";

console.log("=== ES6 Modules Execution ===");
console.log(COMPANY_NAME);
console.log(fetchEmployeeName(employee));

const newEmployee = createEmployee("Rahul", 60000);

console.log(newEmployee);

console.log(calculateAnnualSalary(employee.salary));
console.log(calculateBonus(employee.salary, 10));
console.log(TAX_RATE);

