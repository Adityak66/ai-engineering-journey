// 05-conditional-types.ts
// Compile-time type branching using 'T extends U ? X : Y'.

// 1. Primitive type condition
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
type C = IsString<boolean>; // false

// 2. Structural object matching with conditional types
type HasName<T> = T extends { name: string } ? true : false;

interface Employee {
    id: number;
    name: string;
}

interface Product {
    id: number;
    price: number;
}

type EmployeeCheck = HasName<Employee>; // true
type ProductCheck = HasName<Product>;   // false

// 3. Conditional type utility: TypeName extractor
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type NameType = TypeName<"Aditya">; // "string"
type CountType = TypeName<42>;       // "number"
type FlagType = TypeName<true>;     // "boolean"

console.log("Conditional type checks evaluated cleanly at compile time.");

export type { IsString, HasName, EmployeeCheck, ProductCheck, TypeName, NameType, CountType, FlagType };
