// 08-optional-chaining.ts — Optional Chaining (?.) and Nullish Coalescing (??)

export {};

console.log("=== 08-optional-chaining ===");

interface Employee {
    name: string;
    address?: {
        city?: string;
        postalCode?: string;
    };
    contact?: {
        phone?: string;
    };
}

const employee1: Employee = {
    name: "Rahul"
    // address is omitted (undefined)
};

const employee2: Employee = {
    name: "Aditya",
    address: {
        city: "Nashik"
    }
};

// 1. Optional chaining (?.) prevents 'Cannot read properties of undefined' runtime crashes
const city1 = employee1.address?.city ?? "Unknown";
const city2 = employee2.address?.city ?? "Unknown";

console.log(`${employee1.name}'s City:`, city1); // Unknown
console.log(`${employee2.name}'s City:`, city2); // Nashik

// 2. Safe access when the root object itself might be undefined
function getEmployeeCity(emp?: Employee): string {
    return emp?.address?.city ?? "Unknown";
}

console.log("City with undefined employee object:", getEmployeeCity(undefined));

// 3. Nullish coalescing (??) vs Logical OR (||)
// ?? triggers fallback ONLY for null or undefined (preserves 0 and "")
const bonusPoints: number | undefined = 0;

const fallbackWithOR = bonusPoints || 50;  // 50 (overwrites valid 0!)
const fallbackWithNC = bonusPoints ?? 50;  // 0  (correctly preserves 0!)

console.log("Falsy 0 with || (overwrites):", fallbackWithOR);
console.log("Falsy 0 with ?? (preserves):", fallbackWithNC);
