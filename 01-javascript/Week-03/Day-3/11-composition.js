// ==========================================
// 11. Composition (HAS-A relationship)
// ==========================================
// While Inheritance defines what an object IS (A Manager IS AN Employee),
// Composition defines what an object HAS (An Employee HAS AN Address).

const address = {
    city: "Nashik",
    country: "India"
};

const employee = {
    name: "Aditya",
    department: "Engineering",
    // We compose the object by embedding the address inside it
    address: address 
};

console.log("=== Composition Example ===");
console.log(`Employee City: ${employee.address.city}`);


// ==========================================
// Custom Composition Example
// ==========================================
console.log("\n=== Custom Composition Example ===");

const engine = {
    horsepower: 800,
    type: "V8 Turbo"
};

const battery = {
    capacity: "100kWh",
    range: "350 miles"
};

// A Car is COMPOSED of an Engine and a Battery.
const hybridCar = {
    model: "FutureTech X",
    engine: engine,
    battery: battery,
    
    start() {
        console.log(`Starting ${this.model}...`);
        console.log(`Firing up ${this.engine.type} engine with ${this.engine.horsepower}HP.`);
        console.log(`Battery checked: ${this.battery.range} remaining.`);
    }
};

hybridCar.start();

