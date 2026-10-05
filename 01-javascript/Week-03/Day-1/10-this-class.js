// 3. Classes and the 'this' keyword

class BankAccount {
    // The constructor runs automatically when you use the 'new' keyword.
    // Inside a constructor, 'this' refers precisely to the brand new object being created!
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`[+] ${this.owner} deposited ${amount}. New Balance: ${this.balance}`);
        }
    }
    
    getBalance() {
        return this.balance;
    }
}

console.log("=== Class 'this' Example ===");

// 1. 'new BankAccount' creates an empty object {} in memory
// 2. The constructor runs, and 'this' points to that empty object
// 3. this.owner and this.balance assign values to it.
const account = new BankAccount("Aditya", 5000);

// When we call a method, 'this' behaves just like normal obj.method() calls!
account.deposit(1000);

console.log(`Final checking balance for ${account.owner}: ${account.getBalance()}`);
