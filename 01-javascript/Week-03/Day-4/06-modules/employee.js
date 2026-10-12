export const employee = {
    id: 1,
    name: "Aditya",
    salary: 50000
};

export function getEmployeeName(employee) {
    return employee.name;
}

export default function createEmployee(name, salary) {
    return { name, salary };
}

