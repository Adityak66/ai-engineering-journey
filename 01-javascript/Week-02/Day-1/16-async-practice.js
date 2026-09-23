// --- 1️ Delayed Greeting ---
function exercise1(callback) {
    console.log("=== 1️ Delayed Greeting ===");
    setTimeout(() => {
        console.log("Hello Aditya\n");
        callback();
    }, 2000);
}

// --- 2️ Countdown Timer ---
function exercise2(callback) {
    console.log("=== 2️ Countdown Timer ===");
    let count = 5;
    const timer = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            console.log("Go!\n");
            clearInterval(timer);
            callback();
        }
    }, 1000); 
}

// --- 3️ Execute 3 Tasks Sequentially ---
function exercise3(callback) {
    console.log("=== 3️ 3 Tasks Sequentially ===");
    
    function task1(cb) {
        console.log("Task 1 started");
        setTimeout(() => {
            console.log("Task 1 completed\n");
            cb();
        }, 1000);
    }
    
    function task2(cb) {
        console.log("Task 2 started");
        setTimeout(() => {
            console.log("Task 2 completed\n");
            cb();
        }, 1000);
    }
    
    function task3(cb) {
        console.log("Task 3 started");
        setTimeout(() => {
            console.log("Task 3 completed\n");
            cb();
        }, 1000);
    }

    // Call them sequentially
    task1(() => {
        task2(() => {
            task3(() => {
                callback();
            });
        });
    });
}

// --- 4️ Login → Profile → Dashboard ---
function exercise4(callback) {
    console.log("=== 4️ Login → Profile → Dashboard ===");
    
    function login(user, cb) {
        console.log("Logging in...");
        setTimeout(() => {
            console.log("Login successful\n");
            cb(user);
        }, 1000);
    }
    
    function fetchProfile(user, cb) {
        console.log("Fetching profile...");
        setTimeout(() => {
            console.log("Profile received\n");
            cb({ username: user });
        }, 1000);
    }
    
    function showDashboard(profile) {
        console.log("Opening dashboard...\n");
        setTimeout(callback, 1000);
    }

    login("Aditya", (user) => {
        fetchProfile(user, (profile) => {
            showDashboard(profile);
        });
    });
}

// --- 5️ Order → Payment → Delivery ---
function exercise5(callback) {
    console.log("=== 5️ Order → Payment → Delivery ===");
    
    function placeOrder(cb) {
        console.log("Order placed");
        setTimeout(cb, 1000);
    }
    
    function makePayment(cb) {
        console.log("Payment successful");
        setTimeout(cb, 1000);
    }
    
    function shipOrder(cb) {
        console.log("Order shipped");
        setTimeout(cb, 1000);
    }
    
    function startDelivery(cb) {
        console.log("Delivery started\n");
        setTimeout(cb, 1000);
    }

    placeOrder(() => {
        makePayment(() => {
            shipOrder(() => {
                startDelivery(() => {
                    callback();
                });
            });
        });
    });
}

// --- 🎯 Mini Challenge: User Login System Callback Chain ---
function miniChallenge() {
    console.log("=== 🎯 Mini Challenge (Callback Chain) ===");
    
    function login(cb) {
        setTimeout(() => {
            console.log("✔ logged in");
            cb("user_123");
        }, 1000);
    }
    
    function fetchUser(userId, cb) {
        setTimeout(() => {
            console.log("✔ user fetched");
            cb({ id: userId, name: "Aditya" });
        }, 1000);
    }
    
    function fetchOrders(user, cb) {
        setTimeout(() => {
            console.log("✔ orders fetched");
            cb(["Laptop", "Mouse"]);
        }, 1000);
    }
    
    function showOrders(orders) {
        console.log(`\nHere are your orders: ${orders.join(", ")}`);
        console.log("\n===== DONE =====");
    }

    // Creating the callback chain manually to feel the pain of deep nesting (Callback Hell!)
    login((userId) => {
        fetchUser(userId, (userData) => {
            fetchOrders(userData, (orders) => {
                showOrders(orders);
            });
        });
    });
}

/* ==========================================================
   RUNNER 
   ==========================================================
   I've chained the exercises together sequentially so that 
   the outputs don't overlap in your console. 
   
   Notice how this giant triangle forms — this is exactly 
   why Promises and async/await were invented!
========================================================== */

exercise1(() => {
    exercise2(() => {
        exercise3(() => {
            exercise4(() => {
                exercise5(() => {
                    miniChallenge();
                });
            });
        });
    });
});

