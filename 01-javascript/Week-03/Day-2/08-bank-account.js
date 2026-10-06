// ==========================================
// Practice 2: Bank Account (call, apply, bind)
// ==========================================

const account = {
    owner: "Aditya",
    balance: 5000
};

function deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner}'s balance: ${this.balance}`);
}

console.log("=== Initial Balance: 5000 ===");

console.log("\n=== deposit.call(account, 1000) ===");
// 5000 + 1000 = 6000
deposit.call(account, 1000); 

console.log("\n=== deposit.apply(account, [500]) ===");
// 6000 + 500 = 6500
deposit.apply(account, [500]); 

console.log("\n=== deposit.bind(account) ===");
const depositToAccount = deposit.bind(account);

console.log("Executing bound function with 2000...");
// 6500 + 2000 = 8500
depositToAccount(2000); 

console.log("\nFinal Expected Balance: 8500");
