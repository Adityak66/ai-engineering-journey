// Exercise 6: Typed Asynchronous Functions with Promise Generics

interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
    isActive: boolean;
}

// Simulates fetching employee data asynchronously
async function getEmployees(): Promise<Employee[]> {
    const mockDatabase: Employee[] = [
        { id: 1, name: "Rahul", salary: 50000, department: "IT", isActive: true },
        { id: 2, name: "Priya", salary: 60000, department: "HR", isActive: true },
        { id: 3, name: "Aditya", salary: 75000, department: "Engineering", isActive: true }
    ];

    // Return mock data wrapped in a resolved Promise
    return Promise.resolve(mockDatabase);
}

// Consuming the typed async function
async function displayEmployeeData(): Promise<void> {
    try {
        const list: Employee[] = await getEmployees();
        console.log(`Fetched ${list.length} employees successfully.`);
        list.forEach(emp => console.log(`- ${emp.name} (${emp.department})`));
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Fetch error:", error.message);
        } else {
            console.error("Unknown error occurred");
        }
    }
}

displayEmployeeData();

export { getEmployees };
