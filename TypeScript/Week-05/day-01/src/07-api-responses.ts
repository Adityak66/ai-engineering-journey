// 07-api-responses.ts
// Real-world API response patterns using reusable generic contracts.

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
    timestamp?: string;
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

// Challenge: Adding a Customer model and reusing ApiResponse<T> without modifying the interface
interface Customer {
    id: number;
    name: string;
    email: string;
}

// Factory helper function returning a strongly-typed ApiResponse<T>
function createSuccessResponse<T>(data: T, message: string): ApiResponse<T> {
    return {
        data,
        success: true,
        message,
        timestamp: new Date().toISOString()
    };
}

// 1. Employee response
const employeeResponse: ApiResponse<Employee> = createSuccessResponse(
    { id: 101, name: "Rahul", salary: 50000 },
    "Employee loaded successfully"
);

// 2. Product response
const productResponse: ApiResponse<Product> = createSuccessResponse(
    { id: 1, name: "Laptop", price: 65000 },
    "Product loaded successfully"
);

// 3. Customer response (reusing the same generic interface)
const customerResponse: ApiResponse<Customer> = createSuccessResponse(
    { id: 501, name: "Anita Rao", email: "anita@example.com" },
    "Customer loaded successfully"
);

console.log(`[Employee] ${employeeResponse.data.name} - $${employeeResponse.data.salary}`);
console.log(`[Product] ${productResponse.data.name} - $${productResponse.data.price}`);
console.log(`[Customer] ${customerResponse.data.name} - ${customerResponse.data.email}`);

export type { ApiResponse, Employee, Product, Customer };
export { createSuccessResponse };
