// 08-pagination.ts
// Generic pagination structures for ASP.NET Core style API payloads.

interface PaginatedResponse<T> {
    items: T[];
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

interface Employee {
    id: number;
    name: string;
    salary: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

// Generic function to slice and wrap items into a typed PaginatedResponse<T>
function paginate<T>(allItems: T[], page: number, pageSize: number): PaginatedResponse<T> {
    const totalItems = allItems.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const currentPage = Math.max(1, Math.min(page, totalPages));

    const startIndex = (currentPage - 1) * pageSize;
    const items = allItems.slice(startIndex, startIndex + pageSize);

    return {
        items,
        currentPage,
        pageSize,
        totalItems,
        totalPages
    };
}

// 1. Paginated Employee dataset
const employeeDatabase: Employee[] = [
    { id: 1, name: "Rahul", salary: 50000 },
    { id: 2, name: "Priya", salary: 60000 },
    { id: 3, name: "Aditya", salary: 75000 },
    { id: 4, name: "Sarah", salary: 62000 },
    { id: 5, name: "Amit", salary: 48000 }
];

const paginatedEmployees: PaginatedResponse<Employee> = paginate(employeeDatabase, 1, 2);
console.log(`Employees Page ${paginatedEmployees.currentPage} of ${paginatedEmployees.totalPages}`);
console.log(`Total records: ${paginatedEmployees.totalItems}`);
paginatedEmployees.items.forEach(emp => console.log(`- ${emp.name} ($${emp.salary})`));

// 2. Reusing identical PaginatedResponse<T> with Product dataset
const productCatalog: Product[] = [
    { id: 101, name: "Laptop", price: 65000 },
    { id: 102, name: "Mechanical Keyboard", price: 4500 },
    { id: 103, name: "Monitor 27 inch", price: 22000 }
];

const paginatedProducts: PaginatedResponse<Product> = paginate(productCatalog, 2, 2);
console.log(`\nProducts Page ${paginatedProducts.currentPage} of ${paginatedProducts.totalPages}`);
console.log(`Total products: ${paginatedProducts.totalItems}`);
paginatedProducts.items.forEach(prod => console.log(`- ${prod.name} ($${prod.price})`));

export type { PaginatedResponse, Employee, Product };
export { paginate };
