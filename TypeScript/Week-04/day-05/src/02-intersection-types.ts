export {};

interface Employee {
    id: number;
    name: string;
}

interface SalaryInfo {
    salary: number;
}

type PaidEmployee = Employee & SalaryInfo;

const employee: PaidEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log(employee.name, employee.salary);

interface Address {
    city: string;
    country: string;
}

type EmployeeWithAddress = Employee & Address;

const employeeWithLocation: EmployeeWithAddress = {
    id: 102,
    name: "Aditya",
    city: "Nashik",
    country: "India"
};

console.log(employeeWithLocation.name, employeeWithLocation.city);

type FullProfile = Employee & SalaryInfo & Address;

const fullProfile: FullProfile = {
    id: 103,
    name: "Priya",
    salary: 70000,
    city: "Pune",
    country: "India"
};

console.log(fullProfile.name, fullProfile.salary, fullProfile.city);
