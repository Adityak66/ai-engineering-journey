// Mock Data Fetching Functions

function getUsers() {
    return new Promise((resolve) => setTimeout(() => resolve(25), 1000));
}

function getProducts(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject("Unable to load products");
            else resolve(120);
        }, 1500);
    });
}

function getOrders() {
    return new Promise((resolve) => setTimeout(() => resolve(48), 800));
}

// SCENARIO 1: Promise.all() - Success

async function loadDashboardSuccess() {
    console.log("===== SCENARIO 1: Promise.all() (All Success) =====");
    try {
        const [users, products, orders] = await Promise.all([
            getUsers(),
            getProducts(false), // No failure
            getOrders()
        ]);

        console.log(`Users loaded    : ${users}`);
        console.log(`Products loaded : ${products}`);
        console.log(`Orders loaded   : ${orders}\n`);
        console.log("Dashboard ready ✅");
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log("Dashboard loading finished\n");
    }
}

// SCENARIO 2: Promise.all() - One Rejection

async function loadDashboardFailure() {
    console.log("===== SCENARIO 2: Promise.all() (One Fails) =====");
    try {
        // Promise.all rejects immediately if ANY promise rejects.
        // We will lose the data from getUsers and getOrders entirely!
        const [users, products, orders] = await Promise.all([
            getUsers(),
            getProducts(true), // This will trigger a rejection
            getOrders()
        ]);
        
        console.log("Dashboard ready"); // This line will NEVER run
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log("Dashboard loading finished\n");
    }
}

// SCENARIO 3: Promise.allSettled() - One Rejection

async function loadDashboardSettled() {
    console.log("===== SCENARIO 3: Promise.allSettled() (One Fails) =====");
    try {
        // allSettled waits for ALL promises to finish, regardless of whether they succeed or fail
        const results = await Promise.allSettled([
            getUsers(),
            getProducts(true), // This will fail
            getOrders()
        ]);

        // results is an array of objects describing the outcome of each Promise
        const usersStatus = results[0].status === "fulfilled" ? "✅" : "❌";
        const productsStatus = results[1].status === "fulfilled" ? "✅" : "❌";
        const ordersStatus = results[2].status === "fulfilled" ? "✅" : "❌";
        
        console.log(`Users loaded    ${usersStatus}`);
        console.log(`Products loaded ${productsStatus}`);
        console.log(`Orders loaded   ${ordersStatus}\n`);

        // Find the rejected promise and print its reason
        const rejected = results.find(r => r.status === "rejected");
        if (rejected) {
            console.log(`Error: ${rejected.reason}`);
        } else {
            console.log("Dashboard ready ✅");
        }
        
    } catch (error) {
        console.log(`Catastrophic Error: ${error}`);
    } finally {
        console.log("Dashboard loading finished\n");
    }
}

// RUN EXPERIMENTS SEQUENTIALLY

async function runExperiments() {
    await loadDashboardSuccess();
    await loadDashboardFailure();
    await loadDashboardSettled();
}

runExperiments();
