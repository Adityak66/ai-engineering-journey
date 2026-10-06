// ==========================================
// Practice 3: Shopping Cart (call, apply, bind)
// ==========================================

const cart = {
    owner: "Aditya",
    total: 1000
};

function addItem(price, quantity) {
    // Math logic: price * quantity
    this.total += price * quantity;
    console.log(`${this.owner}'s cart total: ${this.total}`);
}

console.log("=== Initial Cart Total: 1000 ===");

console.log("\n=== addItem.call(cart, 500, 2) ===");
// Adds (500 * 2) = 1000
// New Total: 2000
addItem.call(cart, 500, 2);

console.log("\n=== addItem.apply(cart, [200, 3]) ===");
// Adds (200 * 3) = 600
// New Total: 2600
addItem.apply(cart, [200, 3]);

console.log("\n=== addItem.bind(cart) ===");
const addToCart = addItem.bind(cart);

console.log("Executing bound function with (100, 5)...");
// Adds (100 * 5) = 500
// New Total: 3100
addToCart(100, 5);

console.log("\nFinal Expected Cart Total: 3100");
