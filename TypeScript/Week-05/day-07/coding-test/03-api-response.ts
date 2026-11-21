// 03-api-response.ts
// Generic API response envelope reused across multiple domain models.

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
}

const employeeResponse: ApiResponse<Employee> = {
    data: {
        id: 101,
        name: "Aditya",
        department: "IT",
        salary: 70000
    },
    success: true,
    message: "Employee retrieved successfully"
};

const productResponse: ApiResponse<Product> = {
    data: {
        id: 501,
        title: "Wireless Keyboard",
        price: 3500,
        inStock: true
    },
    success: true,
    message: "Product retrieved successfully"
};

console.log("Employee response:", employeeResponse.data.name, employeeResponse.success);
console.log("Product response:", productResponse.data.title, productResponse.data.price);

export type { ApiResponse, Employee, Product };
