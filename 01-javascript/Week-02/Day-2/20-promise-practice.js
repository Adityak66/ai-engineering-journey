// 1️ User Flow

function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Toggle this to test rejection
            if (success) {
                resolve({ id: 1, name: "Aditya" });
            } else {
                reject("Login failed");
            }
        }, 1000);
    });
}

function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userId: userId, city: "Mumbai", role: "Developer" });
        }, 1000);
    });
}

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Laptop", "Keyboard", "Mouse"]);
        }, 1000);
    });
}

function runUserFlow() {
    console.log("=== 1️ User Flow Started ===");
    
    // Returning the promise chain so we can sequence it later
    return loginUser()
        .then(user => {
            console.log("User logged in:", user.name);
            return getUserProfile(user.id);
        })
        .then(profile => {
            console.log(`Profile fetched: ${profile.role} based in ${profile.city}`);
            return getProducts();
        })
        .then(products => {
            console.log("Products recommended for you:");
            products.forEach(p => console.log(`  - ${p}`));
        })
        .catch(error => {
            console.error("Error:", error);
        })
        .finally(() => {
            console.log("User Process completed\n");
        });
}

// 2️ Payment Flow

function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing payment...");
            resolve({ transactionId: "TXN-987654", status: "Success" });
        }, 1000);
    });
}

function updateOrder(transaction) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order updated with Transaction: ${transaction.transactionId}`);
            resolve({ orderId: "ORD-101", paymentStatus: "Paid" });
        }, 1000);
    });
}

function sendConfirmationEmail(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Sending email receipt for Order: ${order.orderId}`);
            resolve("Email sent successfully!");
        }, 1000);
    });
}

function runPaymentFlow() {
    console.log("=== 2️ Payment Flow Started ===");
    console.log("Order Placed");
    
    return processPayment()
        .then(transaction => {
            return updateOrder(transaction);
        })
        .then(order => {
            return sendConfirmationEmail(order);
        })
        .then(emailResult => {
            console.log("✔", emailResult);
            console.log("Completed\n");
        })
        .catch(err => {
            console.error("Payment Flow Error:", err);
        });
}

// 3️ Product Flow

function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 101, name: "Mechanical Keyboard" },
                { id: 102, name: "Gaming Mouse" }
            ]);
        }, 1000);
    });
}

function findProduct(products, productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject("Product not found in catalog");
            }
        }, 1000);
    });
}

function getProductDetails(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...product, price: 4500, stock: 12 });
        }, 1000);
    });
}

function runProductFlow() {
    console.log("=== 3️ Product Flow Started ===");
    
    return fetchProducts()
        .then(products => {
            console.log("Products catalog fetched. Searching for ID: 101...");
            return findProduct(products, 101);
        })
        .then(product => {
            console.log(`Product found: ${product.name}`);
            return getProductDetails(product);
        })
        .then(details => {
            console.log("--- Product Details Display ---");
            console.log(`Item: ${details.name}`);
            console.log(`Price: ₹${details.price}`);
            console.log(`Availability: ${details.stock} units left`);
        })
        .catch(err => {
            console.error("Product Flow Error:", err);
        });
}

// RUNNER: Executing sequentially

runUserFlow()
    .then(() => runPaymentFlow())
    .then(() => runProductFlow())

