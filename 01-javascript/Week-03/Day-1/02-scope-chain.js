
// 2. Scope Chain

// JavaScript searches for variables from the INSIDE OUT. 
// Process: Inner scope -> Outer scope -> Global scope.

const company = "TechCorp"; // Global Scope

function outerScope() {
    const department = "Engineering"; // Outer Scope
    
    function innerScope() {
        const employee = "Aditya"; // Inner Scope
        
        // JS looks for 'employee' -> Finds it immediately in innerScope
        console.log(`Employee: ${employee}`); 
        
        // JS looks for 'department' -> Not in innerScope -> Checks outerScope -> Finds it!
        console.log(`Department: ${department}`); 
        
        // JS looks for 'company' -> Not in inner -> Not in outer -> Checks Global -> Finds it!
        console.log(`Company: ${company}`); 
    }
    
    innerScope();
}

console.log("=== Running Scope Chain Example ===");
outerScope();


// 3. Variable Shadowing 

// What happens if two variables have the same name?
console.log("\n=== Running Variable Shadowing Example ===");

const CEO = "Alice (Global CEO)";

function departmentLevel() {
    // This variable "shadows" (hides) the global CEO variable 
    const CEO = "Bob (Department CEO)"; 
    
    function teamLevel() {
        // JS stops searching the scope chain as soon as it finds the FIRST match!
        console.log(`Who is the CEO? -> ${CEO}`); 
    }
    
    teamLevel();
}

departmentLevel();
