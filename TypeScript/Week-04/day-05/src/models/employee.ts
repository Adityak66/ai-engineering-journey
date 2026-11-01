export interface Employee {
    id: number;
    name: string;
    salary: number;
}

export interface Manager extends Employee {
    teamSize: number;
}

export function getEmployeeName(employee: Employee): string {
    return employee.name;
}
