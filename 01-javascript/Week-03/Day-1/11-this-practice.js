// FINAL PRACTICE CHALLENGE

console.log("=== Q1: What does 'this' refer to? ===");
const person = {
    name: "John",
    greet() {
        // Because it is called as person.greet(), 'this' refers exactly to the 'person' object.
        console.log(`Hello, ${this.name}!`);
    }
};
person.greet();


console.log("\n=== Q2: Normal vs Arrow ===");
const tester = {
    value: 99,
    normalFunction() {
        // Depends on HOW it's called. Because we call it as tester.normalFunction(), this === tester.
        console.log("Normal this.value:", this.value); 
    },
    arrowFunction: () => {
        // Inherits 'this' from the global lexical scope. It ignores the object it lives in.
        console.log("Arrow this.value:", this.value); 
    }
};
tester.normalFunction(); // 99
tester.arrowFunction();  // undefined


console.log("\n=== Q3: Closure Private Number ===");
function createPrivateNumber() {
    // This state is strictly private!
    let num = 0;
    return {
        get() {
            return num;
        },
        set(value) {
            num = value;
        }
    };
}

const number = createPrivateNumber();
console.log("Initial number:", number.get()); // 0
number.set(50);
console.log("Updated number:", number.get()); // 50


console.log("\n=== Q4: Closure-Based Bank Account ===");
function createSecureBankAccount(initialDeposit) {
    // Private scope. Cannot be touched using 'this' or object properties!
    let balance = initialDeposit;
    
    return {
        deposit(amount) {
            balance += amount;
            console.log(`[+] Deposited: ${amount}. Balance is now: ${balance}`);
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`[-] Withdrew: ${amount}. Balance is now: ${balance}`);
            } else {
                console.log("[-] Insufficient funds!");
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const mySecureVault = createSecureBankAccount(1000);
mySecureVault.deposit(500);
mySecureVault.withdraw(200);
console.log("Secure Vault Balance:", mySecureVault.getBalance()); // 1300

// Proving it's private (Testing our security)
mySecureVault.balance = 1000000; // This does nothing to the actual variable!
console.log("Attempted hack -> Balance remains:", mySecureVault.getBalance());
