import { getEmployeeName } from "./models/employee";
import type { Employee } from "./models/employee";

const employee: Employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log(getEmployeeName(employee));
