// ==========================================
// 04-nested-objects.ts — Nested Objects and Arrays
// ==========================================

export {};

// 1. Employee with nested address and skills array
let employee: {
    id: number;
    name: string;
    address: {
        city: string;
        country: string;
    };
    skills: string[];
} = {
    id: 101,
    name: "Rahul",
    address: {
        city: "Nashik",
        country: "India"
    },
    skills: ["C#", "TypeScript"]
};

console.log("=== 04-nested-objects ===");
console.log("City:", employee.address.city);
console.log("Primary Skill:", employee.skills[0]);

// 2. Practice: Customer with nested address and array of orders
let customer: {
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    orders: {
        orderId: number;
        totalAmount: number;
        items: string[];
    }[];
} = {
    id: 1,
    name: "Aditya",
    address: {
        street: "College Road",
        city: "Nashik",
        country: "India"
    },
    orders: [
        { orderId: 1001, totalAmount: 4500, items: ["Mechanical Keyboard", "Mousepad"] },
        { orderId: 1002, totalAmount: 1800, items: ["USB-C Hub"] }
    ]
};

console.log(`Customer ${customer.name} from ${customer.address.city} has ${customer.orders.length} orders.`);
