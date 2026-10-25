"use strict";
// ==========================================
// 06-interfaces.ts — Object Contracts and Extending Interfaces
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
const department = {
    id: 1,
    name: "Engineering",
    manager: "Priya"
};
console.log("=== 06-interfaces ===");
console.log(`Department: ${department.name}, Manager: ${department.manager}`);
const product = {
    id: 501,
    name: "Noise-Cancelling Headphones",
    price: 15000,
    description: "Wireless over-ear headset"
};
console.log("Product:", product.name, "Price: ₹" + product.price);
const customer = {
    id: 1,
    name: "Rahul",
    address: {
        city: "Nashik",
        country: "India"
    },
    orders: [1001, 1002]
};
console.log(`Customer ${customer.name} orders:`, customer.orders);
const enterpriseClient = {
    id: 2,
    name: "TechCorp Global",
    address: { city: "Bengaluru", country: "India" },
    orders: [2001, 2002, 2003],
    accountManager: "Aditya",
    discountTier: "Platinum"
};
console.log(`Enterprise Client: ${enterpriseClient.name} (${enterpriseClient.discountTier}) managed by ${enterpriseClient.accountManager}`);
