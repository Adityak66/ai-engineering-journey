// Challenge 2: Bank Account (Closures)


function createBankAccount(initialBalance) {
    // Private state: 'balance' is safely locked inside this closure.
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount}.`);
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew ${amount}.`);
            } else {
                console.log("Insufficient funds or invalid amount.");
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log("=== Bank Account Execution ===");
account.deposit(500);
account.withdraw(200);
console.log("Final Actual Balance:", account.getBalance()); // Expected: 1300

console.log("\n=== Security Test ===");
// Attempting to directly overwrite the balance
account.balance = 999999;
console.log("Attempted: account.balance = 999999;");
console.log("Is the real balance safe? ->", account.getBalance()); // Still 1300!

// What actually happened? 
// We just attached a brand new, useless property to the returned object, completely ignoring the private variable!
console.log("Useless public property attached:", account.balance);
