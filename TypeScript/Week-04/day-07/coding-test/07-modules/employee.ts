// Exercise 7: Module Definition and Exports

export interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Function exported as runtime value
export function getEmployeeName(employee: Employee): string {
    return employee.name;
}
