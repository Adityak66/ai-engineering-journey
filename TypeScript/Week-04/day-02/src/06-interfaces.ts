// ==========================================
// 06-interfaces.ts — Object Contracts and Extending Interfaces
// ==========================================

export {};

// 1. Basic Interface with optional property
interface Department {
    id: number;
    name: string;
    manager?: string;
}

const department: Department = {
    id: 1,
    name: "Engineering",
    manager: "Priya"
};

console.log("=== 06-interfaces ===");
console.log(`Department: ${department.name}, Manager: ${department.manager}`);

// 2. Interface with readonly and optional properties
interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
}

const product: Product = {
    id: 501,
    name: "Noise-Cancelling Headphones",
    price: 15000,
    description: "Wireless over-ear headset"
};

console.log("Product:", product.name, "Price: ₹" + product.price);

// 3. Nested Interfaces and Arrays
interface Address {
    city: string;
    country: string;
}

interface Customer {
    id: number;
    name: string;
    address: Address;
    orders: number[];
}

const customer: Customer = {
    id: 1,
    name: "Rahul",
    address: {
        city: "Nashik",
        country: "India"
    },
    orders: [1001, 1002]
};

console.log(`Customer ${customer.name} orders:`, customer.orders);

// 4. Extending Interfaces using 'extends'
interface EnterpriseCustomer extends Customer {
    accountManager: string;
    discountTier: "Silver" | "Gold" | "Platinum";
}

const enterpriseClient: EnterpriseCustomer = {
    id: 2,
    name: "TechCorp Global",
    address: { city: "Bengaluru", country: "India" },
    orders: [2001, 2002, 2003],
    accountManager: "Aditya",
    discountTier: "Platinum"
};

console.log(`Enterprise Client: ${enterpriseClient.name} (${enterpriseClient.discountTier}) managed by ${enterpriseClient.accountManager}`);
