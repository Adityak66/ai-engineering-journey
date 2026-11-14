// 06-infer-distributive.ts
// Type extraction using 'infer' and understanding distributive conditional types over unions.

// 1. Using 'infer' to unwrap element types from arrays
type ElementType<T> = T extends Array<infer Item> ? Item : T;

type StrItem = ElementType<string[]>; // string
type NumItem = ElementType<number[]>; // number
type DirectType = ElementType<boolean>; // boolean (not an array, returns T)

// 2. Using 'infer' to extract return types from functions
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchEmployee() {
    return { id: 101, name: "Rahul", department: "IT" };
}

type FetchedEmployee = CustomReturnType<typeof fetchEmployee>;

const emp: FetchedEmployee = { id: 101, name: "Rahul", department: "IT" };
console.log("Inferred function return:", emp.name);

// 3. Distributive conditional types:
// Naked type parameters distribute over union members automatically
type ToArray<T> = T extends unknown ? T[] : never;

// string | number distributes to: (string extends unknown ? string[] : never) | (number extends unknown ? number[] : never)
// Resulting in: string[] | number[]
type Distributed = ToArray<string | number>;

const stringArray: Distributed = ["alpha", "beta"];
const numberArray: Distributed = [1, 2, 3];

console.log("Distributed array lengths:", stringArray.length, numberArray.length);

export type { ElementType, StrItem, NumItem, DirectType, CustomReturnType, FetchedEmployee, ToArray, Distributed };
