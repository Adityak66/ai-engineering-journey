// 02-generic-inference.ts
// Demonstrating automatic generic type argument inference by the TypeScript compiler.

function identity<T>(value: T): T {
    return value;
}

// Explicit type arguments: useful when the argument might be ambiguous or when casting
const explicitName = identity<string>("Aditya");
const explicitAge = identity<number>(22);

// Inferred type arguments: TypeScript automatically deduces T from the argument value passed.
// Here T is inferred as string because "Nashik" is a string.
const city = identity("Nashik");

// Here T is inferred as number
const salary = identity(50000);

// Inferred as boolean
const isPermanent = identity(true);

// Inferred as an array of numbers (number[])
const scoreList = identity([85, 92, 78]);

// Inferred as object shape { role: string; level: number }
const roleDetails = identity({ role: "Lead Developer", level: 3 });

console.log("Explicit string:", explicitName);
console.log("Explicit number:", explicitAge);
console.log("Inferred city (string):", city.toUpperCase());
console.log("Inferred salary (number):", salary.toLocaleString());
console.log("Inferred status:", isPermanent);
console.log("Inferred array length:", scoreList.length);
console.log("Inferred role:", roleDetails.role);

export {};
