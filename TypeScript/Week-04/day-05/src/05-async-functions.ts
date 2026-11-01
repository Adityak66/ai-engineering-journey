export {};

interface Employee {
    id: number;
    name: string;
    salary: number;
}

async function fetchEmployee(id: number): Promise<Employee> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "Rahul", salary: 50000 });
        }, 100);
    });
}

async function run(): Promise<void> {
    const employee = await fetchEmployee(101);
    console.log("Loaded employee:", employee.name, employee.salary);
}

run();
