// 05-generic-interfaces.ts
// Generic interfaces for reusable API envelopes and data contracts.

// Generic API response container: T represents the payload type
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

// Domain model 1: Employee
interface Employee {
    id: number;
    name: string;
}

// Domain model 2: Product
interface Product {
    id: number;
    name: string;
    price: number;
}

// 1. Reusing ApiResponse contract for Employee data
const employeeResponse: ApiResponse<Employee> = {
    data: {
        id: 101,
        name: "Rahul"
    },
    success: true,
    message: "Employee loaded successfully"
};

// 2. Reusing identical ApiResponse contract for Product data
const productResponse: ApiResponse<Product> = {
    data: {
        id: 1,
        name: "Mechanical Keyboard",
        price: 6500
    },
    success: true,
    message: "Product loaded successfully"
};

// 3. Reusing for a list of items: T can be an array type
const employeeListResponse: ApiResponse<Employee[]> = {
    data: [
        { id: 101, name: "Rahul" },
        { id: 102, name: "Priya" }
    ],
    success: true,
    message: "Employee list fetched"
};

console.log("Employee response:", employeeResponse.data.name);
console.log("Product response:", productResponse.data.name, productResponse.data.price);
console.log("Employee list count:", employeeListResponse.data.length);

export type { ApiResponse, Employee, Product };
