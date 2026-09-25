function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["John", "Sarah"]);
        }, 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Laptop", "Mouse"]);
        }, 1000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Order1", "Order2"]);
        }, 1500);
    });
}

async function loadAll() {
    console.log("Fetching all data simultaneously...");
    
    // I added a timer so you can see exactly how long this takes!
    console.time("Total Fetch Time"); 

    try {
        // Promise.all launches all 3 requests at the exact same time.
        // It waits for the SLOWEST one (getUsers at 2s) to finish.
        const [users, products, orders] = await Promise.all([
            getUsers(),
            getProducts(),
            getOrders()
        ]);

        console.log("\n Data received:");
        console.log("Users:", users);
        console.log("Products:", products);
        console.log("Orders:", orders);
        console.log("");
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    console.timeEnd("Total Fetch Time");
}

loadAll();
